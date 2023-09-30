import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../../contexts/ConversationProvider";

const Conversations = () => {
  const { conversations, setselectedConversationIndex } = useConversations();

  return (
    <ListGroup variant='flush'>
      {conversations &&
        conversations.map((conversation, i) => (
          <ListGroup.Item
            key={i}
            action
            onClick={() => setselectedConversationIndex(i)}
            active={conversation.selected}
          >
            {conversation.recipients.map((r) => r.name).join(", ")}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default Conversations;
