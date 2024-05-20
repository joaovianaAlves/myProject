"use client";
import React, { useState } from "react";

export default function Sidebar() {
  const [chats, setChats] = useState([]);

  function handleChat() {
    const newChat = { id: chats.length + 1 };
    setChats([...chats, newChat]);
  }

  return (
    <div className="bg-red-500 p-2 h-screen w-32">
      <button onClick={handleChat}>New Chat</button>
      <div>
        {chats.map((chat) => (
          <div key={chat.id} className="bg-white p-2 my-2">
            <p>Chat {chat.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
