import "./Contact_Us.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addName,
  addEmail,
  addPhone,
  addMessage,
  addNationality,
} from "../../stores/Form";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const nameRegex = /^[a-zA-Z\s]{2,40}$/;
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const PhoneRegex = /^[0-9]{9,12}$/;

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (!nameRegex.test(e.target.value)) {
      setErrorName("Nama harus berupa huruf dengan panjang 2-40 ");
    } else {
      setErrorName("");
    }
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setErrorEmail("Format email yang kamu isi tidak sesuai");
    } else {
      setErrorEmail("");
    }
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    if (!PhoneRegex.test(e.target.value)) {
      setErrorPhone("No Telepon harus berupa angka dengan panjang 9-12");
    } else {
      setErrorPhone("");
    }
  };
  const handleChangeNationality = (e) => {
    setNationality(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addName(name));
    dispatch(addEmail(email));
    dispatch(addPhone(phone));
    dispatch(addNationality(nationality));
    dispatch(addMessage(message));
    setName("");
    setEmail("");
    setMessage("");
    setNationality("");
    setPhone("");
    navigate("/review-contact");
  };

  return (
    <div className="Contact">
      <Container fluid>
        <Row>
          <Col
            md={5}
            className="left"
            style={{ backgroundImage: `url("/images/bg.png")` }}
          >
            <div className="Brand">
              <img src="/images/logo-ALTA2.png" alt="brand" className="logo" />
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className="kanan">
            <h2>Contact Us</h2>
            <form name="myForm" action="" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Full Name<tag>*</tag>
                </Form.Label>
                <Form.Control
                  onChange={handleChangeName}
                  id="fullname"
                  size="sm"
                  type="text"
                  placeholder="Your Full Name Here..."
                  value={name}
                />
                <Form.Text className="formText">{errorName}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Email<tag>*</tag>
                </Form.Label>
                <Form.Control
                  id="email"
                  size="sm"
                  type="email"
                  placeholder="example@domail.com"
                  onChange={handleChangeEmail}
                  value={email}
                />
                <Form.Text className="formText">{errorEmail}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Phone Number<tag>*</tag>
                </Form.Label>
                <Form.Control
                  id="phonenumber"
                  size="sm"
                  type="text"
                  placeholder="08573890xxxxx"
                  onChange={handleChangePhone}
                  value={phone}
                />
                <Form.Text className="formText">{errorPhone}</Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Nationality</Form.Label>
                <Form.Select
                  size="sm"
                  id="nationality"
                  onChange={handleChangeNationality}
                  value={nationality}
                >
                  <option selected>Selected</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Foreigner">Foreigner</option>
                </Form.Select>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  id="message"
                  as="textarea"
                  rows={3}
                  placeholder="Your Message Here...."
                  value={message}
                  onChange={handleChangeMessage}
                />
              </Form.Group>
              <Button
                onSubmit="{handleSubmit}"
                type="submit"
                variant="warning"
                id="button"
              >
                Submit
              </Button>{" "}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
