import React from "react";
import { useMessages } from "@/app/state";

export default function MessageBoard() {
  const { messages } = useMessages();
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          {message.role}: {message.message}
        </div>
      ))}
    </div>
  );
}
