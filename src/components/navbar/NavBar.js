import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import styled from "styled-components";

const LogoImg = styled.img`
  height: 5vh;
  width: 7.5vw;
`;

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <LogoImg src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">TV Shows</Nav.Link>
          <Nav.Link href="/">Movies</Nav.Link>
          <Nav.Link href="/">New & Popular</Nav.Link>
          <Nav.Link href="/fav">My List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;