import React from "react";
import { useContacts } from "../../contexts/ContactsProvider";
import { ListGroup } from "react-bootstrap";

const Contact = () => {
  const { contacts } = useContacts();

  return (
    <ListGroup variant='flush'>
      {contacts &&
        contacts.map((contact) => (
          <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default Contact;
