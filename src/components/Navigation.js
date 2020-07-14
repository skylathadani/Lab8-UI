import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">The Right Note</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Buy" id="basic-nav-dropdown">
              <NavDropdown.Item href="/beginner">
                Beginner Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/intermediate">
                Intermediate Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/advanced">
                Advanced Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/store">Full Collection</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/lessons">Lessons</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="/staff">Staff</NavDropdown.Item>
              <NavDropdown.Item href="/students">Students</NavDropdown.Item>
              <NavDropdown.Item href="/instruments">
                Instruments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
