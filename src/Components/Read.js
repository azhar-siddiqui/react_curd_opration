import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
const Read = () => {
  const [user, setUser] = useState([]);

  const base_url =
    "https://62b480b7da3017eabb0bf7b6.mockapi.io/crud_application";
  const getData = async () => {
    const userdata = await axios.get(base_url);
    setUser(userdata.data);
    console.log(userdata.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${base_url}/${id}`);
    await getData();
  };

  const setToLocalStorage = (id, name, email, contact) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
    // localStorage.setItem(id, name, email, contact);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h2>User Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {user.map(({ id, name, email, contact }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{contact}</td>
                <td>
                  <NavLink to="/update">
                    <Button
                      variant="success"
                      onClick={() => {
                        setToLocalStorage(id, name, email, contact);
                      }}
                    >
                      Edit
                    </Button>
                  </NavLink>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Read;
