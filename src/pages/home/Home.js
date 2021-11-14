import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

function Home() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date(),
        times =
          today.getHours() +
          " : " +
          (today.getMinutes() < 10 ? "0" : "") +
          today.getMinutes() +
          " : " +
          (today.getSeconds() < 10 ? "0" : "") +
          today.getSeconds();
      setTime(times);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <NavBar />
      <div className="Home">
        <Container
          fluid
          className="jumbotron"
          style={{
            backgroundImage: `url("/images/bg-img.png")`,
          }}
        >
          <Row>
            <Container fluid>
              <p
                style={{
                  textAlign: "right",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#19345e",
                }}
              >
                {time}
              </p>{" "}
            </Container>
          </Row>

          <div className="jumbotron-content">
            <Row>
              <Col md="auto" xs="auto" sm="auto" lg={5}>
                <img
                  className="avatar img-responsive "
                  src="/images/avatar.jpg"
                  alt="avatar img-responsive"
                />
              </Col>
              <Col className="kanan" md="auto" xs="auto" sm="auto" lg={7}>
                <h4 className="hi">Hi, My name is</h4>
                <h1 className="name">Anne Sullivan</h1>
                <h3 className="desc">I build things for the web</h3>
                <Link to="/contact">
                  {" "}
                  <Button variant="warning" id="button-utama">
                    Get In Touch
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
        <link
          rel="stylesheet"
          href="%PUBLIC_URL%/css/Home.css"
          type="text/css"
        />
      </div>
    </>
  );
}

export default Home;
