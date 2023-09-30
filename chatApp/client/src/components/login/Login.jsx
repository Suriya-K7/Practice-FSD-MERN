import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Login = ({ setId }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(idRef.current.value);
  };

  const createNewId = () => {
    setId(uuid());
  };

  return (
    <Container
      className='align-items-center d-flex '
      style={{ height: "100vh" }}
    >
      <Form
        className='w-100'
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label htmlFor='id'>Enter Your Id</Form.Label>
          <Form.Control
            type='text'
            ref={idRef}
            name='id'
            id='id'
          />
        </Form.Group>
        <Button
          type='submit'
          className='mt-2'
        >
          Login
        </Button>
        <Button
          variant='secondary'
          className='mt-2 mx-2'
          onClick={createNewId}
        >
          Create New Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
