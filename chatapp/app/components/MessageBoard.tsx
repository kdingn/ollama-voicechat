import { useMessages } from "@/app/state";
import { Box, List, ListItem, ListItemText } from "@mui/material";

export default function MessageBoard() {
  const { messages } = useMessages();

  return (
    <List sx={{ padding: 1, paddingBottom: 6 }}>
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
              paddingX: 2,
              paddingY: 0.5,
              maxWidth: "80%",
              textAlign: "left",
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
