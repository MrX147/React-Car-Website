import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
// import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
// import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="8" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  Your safety is paramount at Eagle Transportations. We are
                  committed to providing safe ride solutions with our fleet of
                  insured vehicles, maintained to the highest standards by our
                  skilled mechanics. Our professional chauffeurs undergo
                  rigorous screening, ensuring that each driver meets our strict
                  standards for reliability, professionalism, and expertise.
                  Travel with peace of mind, knowing that your well-being is our
                  top priority.
                </p>

                <p className="section__description">
                  At Eagle Transportations, we go beyond the ordinary to ensure
                  your journey is not only safe but also exceptional. Our
                  commitment extends to regular vehicle inspections and
                  stringent driver training programs, reinforcing our dedication
                  to maintaining the highest standards in the industry. Trust us
                  for a secure, reliable, and enjoyable transportation
                  experience, where your peace of mind is our ultimate goal.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+923309319016</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <BecomeDriverSection /> */}

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default About;
