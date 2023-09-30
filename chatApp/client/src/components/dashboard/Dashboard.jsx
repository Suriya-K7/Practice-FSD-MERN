import React from "react";
import SideBar from "../sideBar/SideBar";
import OpenConversation from "../openConversation/OpenConversation";
import { useConversations } from "../../contexts/ConversationProvider";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();

  return (
    <div
      className='d-flex'
      style={{ height: "100vh" }}
    >
      <SideBar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;
