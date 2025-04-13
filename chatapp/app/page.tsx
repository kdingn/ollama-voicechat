"use client";
import "./global.css";
import InputForm from "./components/InputForm";
import MessageBoard from "./components/MessageBoard";

function page() {
  return (
    <div>
      <MessageBoard />
      <div className="chat-inputform">
        <InputForm />
      </div>
    </div>
  );
}

export default page;
