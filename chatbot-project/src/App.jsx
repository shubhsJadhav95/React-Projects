import { useState } from "react";
import "./app.css";

function Chatbot({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <div className="chat-input">
      <input
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          onSend(input);
          setInput("");
        }}
      >
        Send
      </button>
    </div>
  );
}

function ChatMsg({ msg, user }) {
  return (
    <div className={`message ${user}`}>
      {user === "bot" && <img src="/robot.png" alt="bot" />}
      <span>{msg}</span>
      {user === "user" && <img src="/user.png" alt="user" />}
    </div>
  );
}

function ChatMessages({ messages }) {
  return (
    <div className="messages">
      {messages.map((chatMsg, index) => (
        <ChatMsg
          key={index}
          msg={chatMsg.msg}
          user={chatMsg.user}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [chatMessages, setChatMessages] = useState([
    { msg: "hello chatbot", user: "user" },
    { msg: "Hi! How can I help you?", user: "bot" },
  ]);

  function sendMessage(text) {
    if (!text.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { msg: text, user: "user" },
      { msg: "My name is Shubham Jadhav", user: "bot" },
    ]);
  }

  return (
    <div className="app">
      <Chatbot onSend={sendMessage} />
      <ChatMessages messages={chatMessages} />
    </div>
  );
}
