import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';

const MiNavBar = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">yolarreglo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#inicio">Inicio</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Biodegradables</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Hipoalergénicos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Cocina</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Baño</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.6">Ofertas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#unete">Únete</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default MiNavBar