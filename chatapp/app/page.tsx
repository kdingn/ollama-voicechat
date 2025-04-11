"use client";
import { TextField } from "@mui/material";

function page() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "100vh",
        }}
      >
        <TextField
          multiline
          fullWidth
          sx={{
            maxWidth: "600px",
            margin: "10px",
            backgroundColor: "background.paper", // テーマの paper 色を適用
          }}
        />
      </div>
    </div>
  );
}

export default page;
