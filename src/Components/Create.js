import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const base_url =
    "https://62b480b7da3017eabb0bf7b6.mockapi.io/crud_application";

  //   const header = { "Access-Control-Allow-Origin": "*" };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log({ name, email, contact });
    await axios.post(base_url, { name, email, contact });
    await navigate("/read");
  };

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     axios.post(base_url, { name, email, contact }).then(() => {
  //       navigate("/read");
  //     });
  //   };

  return (
    <>
      <Container>
        <h2>Create</h2>
        <Form onSubmit={handleClick}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Create;
