import { useMessages } from "@/app/state";
import { List, ListItem, ListItemText } from "@mui/material";

export default function MessageBoard() {
  const { messages } = useMessages();

  return (
    <List sx={{ paddingTop: 1, paddingX: 1 }}>
      {messages.map((message, index) => (
        <ListItem
          key={index}
          divider
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 2,
            marginBottom: 1,
            textAlign: message.role === "user" ? "right" : "left",
          }}
        >
          <ListItemText primary={message.message} />
        </ListItem>
      ))}
    </List>
  );
}
