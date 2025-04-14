import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/icelogo.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Ideal Café Logo"
          />
          <strong>Ideal Café</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search Ice Creams 🍨"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="outline-dark" className="me-2">
            <BsCart3 size={20} />
          </Button>
          <Button variant="outline-secondary">
            <MdDarkMode size={20} />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

