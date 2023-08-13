import React, { useState } from "react";
import MessageList from "./MessageList";

import InputEmoji from "react-input-emoji";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const getRandomUsername = () => {
    const randomIndex = Math.floor(Math.random() * user_list.length);
    return user_list[randomIndex];
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const randomUsername = getRandomUsername();
      const newMessage = {
        username: randomUsername,
        message: currentMessage,
      };
      setMessages([newMessage, ...messages]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat App</h1>
      <div className="div-box">
        <MessageList messages={messages} />
      </div>

      <div className="message-input">
        <InputEmoji
          value={currentMessage}
          height={20}
          onChange={setCurrentMessage}
          cleanOnEnter
          onEnter={handleSendMessage}
          placeholder="Type a message"
        />
      </div>
    </div>
  );
}

export default Chat;
