import React from 'react';
import './Header.css';
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
     <Navbar.Brand >Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/movie/list">
            <Nav.Link>List Movies</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/movie/update/:id">
            <Nav.Link>Update Movie</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/movie/create">
            <Nav.Link>Create Movie</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    );

}

export default Header;