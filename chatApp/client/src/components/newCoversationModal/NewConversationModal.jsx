import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../../contexts/ContactsProvider";
import { useConversations } from "../../contexts/ConversationProvider";

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactsIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();

  const { createConversation } = useConversations();

  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prev) => {
      if (prev.includes(contactId)) {
        return prev.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prev, contactId];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactsIds);

    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts &&
            contacts.map((contact) => (
              <Form.Group
                controlId={contact.id}
                key={contact.id}
                className='p-1'
              >
                <Form.Check
                  type='checkbox'
                  value={selectedContactsIds.includes(contact.id)}
                  label={contact.name}
                  onChange={() => handleCheckboxChange(contact.id)}
                />
              </Form.Group>
            ))}
          <Button
            type='submit'
            className='mt-3'
          >
            Create New Contact
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
