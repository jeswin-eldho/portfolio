import { Navbar, Container, Nav } from "react-bootstrap";
import "./Components.scss";
const TopNavbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className="nav-heading" href="#home">
            Jeswin Eldho
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#features">Work Ex</Nav.Link>
            <Nav.Link href="#pricing">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
