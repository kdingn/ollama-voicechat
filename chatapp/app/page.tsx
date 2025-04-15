"use client";
import InputForm from "./components/InputForm";
import MessageBoard from "./components/MessageBoard";
import "./global.css";

function page() {
  return (
    <div className="chat-container">
      <MessageBoard />
      <div className="chat-inputform">
        <InputForm />
      </div>
    </div>
  );
}

export default page;
