import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Ekart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <i class="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i class="fas fa-message"></i> About-us
              </Nav.Link>
            </Nav>
            <Nav>
              <LinkContainer to="/signin">
                <Nav.Link href="#deets">
                  <i class="fas fa-user"></i> Signin
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link eventKey={2} href="#memes">
                  <i class="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
