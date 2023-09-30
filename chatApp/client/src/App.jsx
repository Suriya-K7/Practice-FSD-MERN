import React, { useState } from "react";
import Login from "./components/login/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/dashboard/Dashboard";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationProvider";
import { SocketProvider } from "./contexts/SocketProvider";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  console.log(id);
  return id ? dashboard : <Login setId={setId} />;
};

export default App;
