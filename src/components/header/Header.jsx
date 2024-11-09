import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
// import logo from '../../assets/3d-rendering-caution-danger-symbol.png';
import logo from '../../assets/grunge-radioactive-sign.png';
import Row from 'react-bootstrap/Row';

function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" className="shadow-none bg-transparent position-absolute top-0 start-5 z-10">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
                src={logo}
                alt="Γ-sense logo"
                width={50}
                height={50}
                className="lt-xs:hidden"
            />
            {/* <span className="ms-2">Γ-sense</span> */}
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#graph">Graph</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header
