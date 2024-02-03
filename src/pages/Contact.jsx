import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios"; // Import axios for making HTTP requests

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Handler to update form data on user input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace with your server endpoint
      const response = await axios.post(
        "http://localhost:3001/submit-form",
        formData
      );

      if (response.status === 200) {
        // Handle success here
        console.log("Message sent successfully!");
        setShowModal(true);
        // Optionally, clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
          phoneNumber: "",
        });
      } else {
        // Handle error
        console.error("Failed to send message!");
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setShowErrorModal(true);
    }
  };
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Phone Number"
                    type="text"
                    inputMode="numeric"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button className="contact__btn" type="submit">
                    Send Message
                  </button>
                </FormGroup>
                <div className={showModal ? "modal show" : "modal"}>
                  <div className="modal-content">
                    <span className="close" onClick={() => setShowModal(false)}>
                      &times;
                    </span>
                    <p>
                      Thank you for sending us a message! We've received your
                      information and will be in touch shortly.
                    </p>
                  </div>
                </div>
                <div className={showErrorModal ? "modal show" : "modal"}>
                  <div className="modal-content">
                    <span
                      className="close"
                      onClick={() => setShowErrorModal(false)}
                    >
                      &times;
                    </span>
                    <p>
                      Sorry, there was an error submitting the form. Please try
                      again later.
                    </p>
                  </div>
                </div>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  dhok ali akbar, Rawalpindi, Pakistan
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+923309319016</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    syed.shazeb90@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
