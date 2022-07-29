import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setContact(localStorage.getItem("contact"));
    // UpdateData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    const base_url =
      "https://62b480b7da3017eabb0bf7b6.mockapi.io/crud_application";

    await axios.put(`${base_url}/${id}`, { name, email, contact });
    await navigate("/read");
  };

  return (
    <Container>
      <h2 className="text-center">Update</h2>
      <Form onSubmit={UpdateData}>
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
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default Update;
