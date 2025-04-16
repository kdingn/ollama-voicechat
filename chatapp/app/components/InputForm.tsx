import useOllamaChat from "@/app/hooks/useOllamaChat";
import { useMessages } from "@/app/state";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, InputBase } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function CustomizedInputForm() {
  const placeholder = "Input message here...";
  const { messages, addMessage } = useMessages();
  const { streamOllamaReply } = useOllamaChat();
  const [input, setInput] = useState<string>("");
  const [isComposing, setIsComposing] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;
    const message = input.trim();
    const nextMessages = [...messages, { role: "user", content: message }];
    addMessage("user", message);
    setInput("");
    streamOllamaReply(nextMessages);
  };

  return (
    <Paper sx={{ display: "flex" }}>
      <InputBase
        multiline
        fullWidth
        placeholder={placeholder}
        value={input}
        sx={{ fontSize: "1.1rem", padding: "6px 0px 6px 10px" }}
        onChange={(e) => setInput(e.target.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !isComposing) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <IconButton
        sx={{ alignSelf: "center", margin: "0px 6px 0px 4px" }}
        onClick={handleSend}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
