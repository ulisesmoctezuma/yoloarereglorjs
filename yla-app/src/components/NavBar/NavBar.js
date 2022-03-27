import React from 'react';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import logoAzul from './yla-logo-azul.svg';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

const MiNavBar = () => {
    return (
<Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
        <img
          alt="yolarreglo"
          src={logoAzul}
          height="30"
          width="auto"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="color-link-nav" href="#inicio">Inicio</Nav.Link>
      <Nav.Link className="color-link-nav" href="#blog">Blog</Nav.Link>
      <NavDropdown  className="color-link-nav" title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item className="color-link-nav" href="#action/3.1">Biodegradables</NavDropdown.Item>
        <NavDropdown.Item className="color-link-nav" href="#action/3.2">Hipoalergénicos</NavDropdown.Item>
        <NavDropdown.Item className="color-link-nav" href="#action/3.4">Cocina</NavDropdown.Item>
        <NavDropdown.Item className="color-link-nav" href="#action/3.5">Baño</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="color-link-nav" href="#action/3.6">Ofertas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <CartWidget />
      <Nav.Link className="color-link-nav" href="#unete">Únete</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default MiNavBar