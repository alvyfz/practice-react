import "./Review_Contact.css";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Review_Contact() {
  const name = useSelector((st) => st.form.name);
  const email = useSelector((st) => st.form.email);
  const phone = useSelector((st) => st.form.phone);
  const nationality = useSelector((st) => st.form.nationality);
  const message = useSelector((st) => st.form.message);
  return (
    <>
      <Container
        fluid
        id="halaman1"
        style={{ backgroundImage: `url("/images/bg-review.png")` }}
      >
        <Row className="auto justify-content-md-center">
          <Card className="card" id="kotak card">
            <Container>
              <Row className="auto justify-content-md-center">
                <Col md={3} className="d-none d-md-block">
                  <div>Full Name</div>
                  <div>Email</div>
                  <div>Phone Number</div>
                  <div>Nationality</div>
                </Col>
                <Col md={1} className="d-none d-md-block titikdua">
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                </Col>
                <Col md={8}>
                  <div id="fullname">{name}</div>
                  <div id="email">{email}</div>
                  <div id="phone">{phone}</div>
                  <div id="nationality">{nationality}</div>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col md={12}>
                <p id="message" className="message">
                  {message}
                </p>
              </Col>
            </Row>
            <Row className="auto justify-content-md-center">
              <Col md={8}>
                <hr />
              </Col>
            </Row>
            <Row id="thanks">
              <Col md={8}>
                <h6>
                  Thanks for contacting us! <br />
                  We will be touch with you shortly.
                </h6>
                <Button variant="warning" id="button">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/home"
                  >
                    Home
                  </Link>
                </Button>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </>
  );
}
export default Review_Contact;
