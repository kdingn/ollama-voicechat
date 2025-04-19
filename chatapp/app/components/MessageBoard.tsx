import { useMessages } from "@/app/state";
import { Box, List, ListItem, ListItemText } from "@mui/material";

export default function MessageBoard() {
  const { messages } = useMessages();

  return (
    <List sx={{ paddingBottom: 8 }}>
      {messages.map((message, index) => (
        <ListItem
          key={index}
          sx={{
            justifyContent: message.role === "user" ? "flex-end" : "flex-start",
            paddingY: 0.8,
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 2,
              paddingX: 1.8,
              paddingY: 0.5,
              maxWidth: "80%",
              textAlign: "left",
              outline: "1px solid",
            }}
          >
            <ListItemText
              primary={message.content}
              sx={{ whiteSpace: "pre-line" }}
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
