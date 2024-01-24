import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
// import BlogList from "../components/UI/BlogList";
import BookingForm from "../components/UI/BookingForm";

const Reservation = () => {
  return (
    <Helmet title="reservation">
      <CommonSection title="Reservation" />
      <section>
        <Container>
          <Row>
            {/* <BlogList /> */}
            {/* <BookingForm /> */}
            <BookingForm />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Reservation;
