import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/toyota-offer-2.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "20px" }
      }
    >
      <Container>
        <Row>
          <Col lg="8" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle text-center">Welcome to</h4>
              <h2 className="section__title text-center">
                {" "}
                Eagle Transportations
              </h2>
              <p className="section__description">
                Discover unparalleled chauffeured excellence with Eagle
                Transportations in the Metro Detroit Area. With a legacy
                spanning over 20 years, we are committed to delivering
                impeccable, secure, and dependable service throughout Michigan.
                Whether it's a seamless airport transfer, your dream wedding, a
                memorable night out, an exciting group adventure, or any luxury
                transportation need, rely on Eagle Transportations for unmatched
                expertise. Elevate your journey with us, where excellence meets
                style, and reliability is our signature. Any Ride, Any Size -
                Eagle Transportations has your solution.
              </p>

              <div className="about__section-item">
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>
                  <b>Trusted Chauffeurs:</b> Our security-screened,
                  background-checked will ensure your safety and comfort.
                </p>

                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>
                  <b>Vehicle Excellence:</b> Our fleet consists of insured
                  vehicles meticulously maintained by our in-house mechanics.
                </p>
              </div>

              <div className="about__section-item">
                <p className="section__description">
                  <i class="ri-checkbox-circle-line"></i>
                  <b>Round-the-Clock Support:</b> Access our 24-hour dispatch
                  center for seamless assistance and support.
                </p>

                <p className="section__description ">
                  <i class="ri-checkbox-circle-line"></i>
                  <b>Flexible Scheduling:</b> Enjoy 24/7 pickup and drop-off
                  availability to suit your travel needs
                </p>
              </div>
            </div>
          </Col>

          <Col lg="4" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
