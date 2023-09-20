import React, { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const App = () => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMsg, setReceivedMsg] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMsg(data.message);
    });
  }, [socket]);

  return (
    <div className='center'>
      <input
        type='text'
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>join</button>
      <input
        type='text'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <h1>{receivedMsg}</h1>
    </div>
  );
};

export default App;
