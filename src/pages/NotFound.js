import "./NP.css";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
function NotFound() {
  return (
    <>
      <div className="App">
        <Row className="justify-content-md-center">
          {" "}
          <Col md={6}>
            {" "}
            <h1 style={{ fontWeight: "black", fontSize: "250px" }}>4😵4</h1>
          </Col>{" "}
        </Row>
        <br /> <br />
        <Row className="justify-content-md-center">
          <Col md={6}>
            {" "}
            <h1 style={{ fontWeight: "bold" }}>
              OOPS, Something's wrong here....
            </h1>
            <p>We can't find the page you're looking for. Head back to home</p>
            <br />
            <Link to="/home">
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#19345e" }}
              >
                {" "}
                Back home
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default NotFound;
