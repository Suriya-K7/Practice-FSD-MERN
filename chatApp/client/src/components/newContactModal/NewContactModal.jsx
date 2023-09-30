import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../../contexts/ContactsProvider";

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='id'>Id</Form.Label>
            <Form.Control
              type='text'
              id='id'
              ref={idRef}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='name'>Name</Form.Label>
            <Form.Control
              type='text'
              id='name'
              ref={nameRef}
              required
            />
          </Form.Group>
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

export default NewContactModal;
