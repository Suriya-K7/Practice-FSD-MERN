import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Conversations from "../conversations/Conversations";
import Contact from "../contacts/Contact";
import NewConversationModal from "../newCoversationModal/NewConversationModal";
import NewContactModal from "../newContactModal/NewContactModal";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts";

const SideBar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATION_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      style={{ width: "250px" }}
      className='d-flex flex-column'
    >
      <Tab.Container
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        <Nav
          variant='tabs'
          className='justify-content-center'
        >
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className='border-right overflow-auto flex-grow-1'>
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contact />
          </Tab.Pane>
        </Tab.Content>
        <div className='p-2 border-top border-right small'>
          <span className='text-muted'>{id}</span>
        </div>
        <Button
          onClick={() => setModalOpen(true)}
          className='rounded-0'
        >
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal
        show={modalOpen}
        onHide={closeModal}
      >
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default SideBar;
