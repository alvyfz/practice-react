import "./Navbar.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-start">
          <Col md={7} className="d-none d-md-block">
            <Navbar.Brand href="/home">
              <img
                className="navbar-img"
                src="/images/logo-ALTA.png"
                alt="brand"
              />
            </Navbar.Brand>
          </Col>
          <Col md={5}>
            <Navbar bg="white" expand="lg" className="navbarK">
              <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link style={{ textDecoration: "none" }} to="/home">
                      <Nav.Link
                        style={{ color: "#19345E" }}
                        className="active kanan-nav-active"
                        id="kanan-nav-active activeNav"
                        href="#home"
                      >
                        HOME
                      </Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/home">
                      <Nav.Link
                        className="kanan-nav"
                        id="kanan-nav unactiveNav"
                        href="#home"
                        style={{ textDecoration: "none", color: "#19345E" }}
                      >
                        ABOUT
                      </Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/news">
                      <Nav.Link
                        style={{ color: "#19345E" }}
                        id="kanan-nav unactiveNav"
                        className="kanan-nav"
                        href="#link"
                      >
                        NEWS
                      </Nav.Link>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/contact">
                      <Nav.Link
                        style={{ color: "#19345E" }}
                        className="kanan-nav"
                        id="kanan-nav unactiveNav"
                        href="../Contact/Contact.js"
                      >
                        CONTACT
                      </Nav.Link>
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}
// F47522;
