import Paper from "@mui/material/Paper";
import { IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function CustomizedInputForm() {
  const placeholder = "Input message here...";
  return (
    <Paper
      sx={{
        display: "flex",
        maxWidth: "600px",
        width: "100vw",
      }}
    >
      <InputBase
        multiline
        fullWidth
        placeholder={placeholder}
        sx={{ fontSize: "1.1rem", padding: "6px 0px 6px 10px" }}
      />
      <IconButton sx={{ alignSelf: "center", margin: "0px 6px 0px 4px" }}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
