import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Cabecera: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Free Mind</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/features">
            <Nav.Link>features</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Pricing" id="pricing-dropdown">
            <LinkContainer to="/pricing/register">
              <NavDropdown.Item>Registrar Revistas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/pricing/list">
              <NavDropdown.Item>Listar Revistas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/pricing/admin">
              <NavDropdown.Item>Administrar Revistas</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/about">
            <Nav.Link>Quienes somos</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Cabecera;
