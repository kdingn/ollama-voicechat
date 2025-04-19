import { Message, useMessages, usePrompt } from "@/app/state";

export default function useOllamaChat() {
  const { prompt } = usePrompt();
  const { addMessage, updateMessage } = useMessages();

  const model = process.env.NEXT_PUBLIC_OLLAMA_MODEL;
  const endpoint = process.env.NEXT_PUBLIC_OLLAMA_ENDPOINT;
  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_OLLAMA_ENDPOINT is not defined");
  }

  const streamOllamaReply = async (chatMessages: Message[]) => {
    // request body に渡すデータを作成
    const data = [{ role: "system", content: prompt }, ...chatMessages];
    // response の初期値に空のメッセージを追加
    const messageId = chatMessages.length;
    addMessage("assistant", "");
    // fetch API を使用してリクエストを送信
    try {
      // リクエストを送信
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: data,
          stream: true,
        }),
      });
      if (!response.body) {
        throw new Error("No response body from the ollama server");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      // ストリームを読み込む
      let buffer = "";
      let responseContent = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        // 複数の JSON チャンクがある可能性があるので行単位で処理
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const parsed = JSON.parse(line);
            if (parsed.message?.content) {
              responseContent += parsed.message.content;
              updateMessage(messageId, responseContent);
            }
          } catch (e) {
            console.warn("JSON parse error on line:", line);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching Ollama response:", error);
    }
  };
  return { streamOllamaReply };
}
