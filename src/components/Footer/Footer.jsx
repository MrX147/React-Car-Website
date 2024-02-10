import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

import Logo01 from "../../assets/all-images/Logo-1.png";

const socialLinks = [
  {
    url: "https://www.facebook.com/allyproperties.pk",
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
const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  // {
  //   path: "#",
  //   display: "Privacy Policy",
  // },

  {
    path: "/reservation",
    display: "Reservation",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  {/* <i class="ri-car-line"></i>
                  <span>
                    Eagle <br /> Transportations
                  </span> */}
                  <div className="my-logo">
                    <img src={Logo01} alt="" className="" />
                  </div>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Experience the pinnacle of transportation excellence with Eagle
              Transportations. From seamless airport transfers to luxury city
              tours, trust us for safe, reliable, and unforgettable journeys.
              Your satisfaction is our priority, ensuring every ride exceeds
              expectations.
            </p>
          </Col>

          <Col lg="2" md="4" sm="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="4">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Kurri Road, Rawalpindi, Pakistan</p>
              <p className="office__info">Phone: +923309319016</p>

              <p className="office__info">Email: syed.shazeb90@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="1" md="4" sm="4">
            <h6 className="fw-bold text-white">Follow Us</h6>
            <div className="mb-4">
              <div className="d-flex align-items-center gap-4 mt-3">
                {socialLinks.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="social__link-icon-con"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col> */}

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year} | Eagle
                Transportaions Pvt Ltd By Web Development Team.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
