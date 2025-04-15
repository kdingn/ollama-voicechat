import { useMessages } from "@/app/state";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, InputBase } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function CustomizedInputForm() {
  const placeholder = "Input message here...";
  const { addMessage } = useMessages();
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim() === "") return;
    addMessage("user", input);
    setInput("");
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
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
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
