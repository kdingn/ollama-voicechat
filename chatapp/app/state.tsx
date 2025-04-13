import { create } from "zustand";

interface Message {
  role: string;
  message: string;
}

interface MessagesState {
  messages: Message[];
  addMessage: (role: string, message: string) => void;
}

export const useMessages = create<MessagesState>((set) => ({
  messages: [
    {
      role: "system",
      message: `あなたは優秀なAIです。次のことを守って回答してください。
* 質問者はIT技術者
* 丁寧な言葉遣い
* 丁寧過ぎない言葉遣い
* 前向きな言葉
* わかる、察する、把握した旨は含めない
* いいですね、など中身のない同意から始めない
* 手伝いできることはあるか聞かない
* 質問内容を確認しない
* 繰り返さない
* なるべく質問しない
* 困っている場合は何かおすすめする
* 説明を追加する
* 自然な会話文
* 箇条書きしない
* 特殊文字を使用しない
* 扱えない話題はない`,
    },
    { role: "user", message: "こんにちは、調子はどうですか？" },
    { role: "assistant", message: "こんにちは！調子は良いです。" },
    { role: "user", message: "最近、AIについて学んでいます。" },
    { role: "assistant", message: "それは素晴らしいですね！" },
  ],
  addMessage: (role: string, message: string) => {
    set((state) => ({
      messages: [...state.messages, { role: role, message: message }],
    }));
  },
}));
