import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    numberOfPersons: "",
    numberOfLuggage: "",
    journeyDate: "",
    journeyTime: "",
    additionalInfo: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Handler to update form data on user input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      // Replace with your server endpoint
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submitted successfully, you can handle success here
        setShowModal(true);
        console.log("Form submitted successfully!");
        // Optionally reset the form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          fromAddress: "",
          toAddress: "",
          numberOfPersons: "",
          numberOfLuggage: "",
          journeyDate: "",
          journeyTime: "",
          additionalInfo: "",
        });
      } else {
        // Handle form submission error
        console.error("Form submission failed!");
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowErrorModal(true);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <h1 className="reservation-heading">
        Enter Your Details to reserve a ride
      </h1>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block  mb-4">
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block  mb-4">
        <input
          type="text"
          inputMode="numeric"
          // pattern="[0-9]*"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="From Address"
          name="fromAddress"
          value={formData.fromAddress}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="To Address"
          name="toAddress"
          value={formData.toAddress}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select
          name="numberOfPersons"
          value={formData.numberOfPersons}
          onChange={handleChange}
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="numberOfLuggage"
          value={formData.numberOfLuggage}
          onChange={handleChange}
        >
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggage">2 Luggage</option>
          <option value="3 luggage">3 Luggage</option>
          <option value="4 luggage">4 Luggage</option>
          <option value="5+ luggage">5+ Luggage</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          placeholder="Journey Date"
          name="journeyDate"
          value={formData.journeyDate}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          name="journeyTime"
          value={formData.journeyTime}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Optional Message"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>
        <button className="reservation__btn" type="submit">
          Submit
        </button>
      </FormGroup>
      <div className={showModal ? "modal show" : "modal"}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <p>
            Thank you for submitting your details! We've received your
            information and will be in touch shortly. We appreciate your
            interest and look forward to assisting you further
          </p>
        </div>
      </div>
      <div className={showErrorModal ? "modal show" : "modal"}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowErrorModal(false)}>
            &times;
          </span>
          <p>
            Sorry, there was an error submitting the form. Please try again
            later.
          </p>
        </div>
      </div>
    </Form>
  );
};

export default BookingForm;
