import { TextField } from "@mui/material";

export default function InputForm() {
  return (
    <TextField
      multiline
      fullWidth
      sx={{
        maxWidth: "600px",
        marginX: "10px",
        backgroundColor: "background.paper",
      }}
    />
  );
}
