import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { MdEmail } from "react-icons/md";

import Logo01 from "../../assets/all-images/Logo-1.png";
import Logo02 from "../../assets/all-images/Logo-2.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  // {
  //   path: "/cars",
  //   display: "Cars",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="8" md="8" sm="8">
              <div className="header__top__left">
                <span className="need-help">Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +923309319016
                </span>
                <span className="react-icon1">
                  <MdEmail />
                </span>
                <span className="header__top__help2">
                  Syed.Shazeb90@gmail.com
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="3">
              <Link to="/home" className="">
                <span className="my-logo">
                  <img src={Logo02} alt="" className="" />
                </span>
              </Link>
            </Col>

            <Col lg="3" md="3" sm="3">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>America</h4>
                  <h6>Detroit City, America</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="3">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>24 hours Service</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="3"
              md="3"
              sm="3"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn my-btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper  align-items-center justify-content-between">
            <span className="mobile__menu">
              <Col lg="4" md="4" sm="4">
                <Link to="/home" className="  ">
                  <span className="my-logo-menu">
                    <img src={Logo01} alt="" className="" />
                  </span>
                </Link>
              </Col>
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                <Row lg="0" md="4" sm="4">
                  <Link to="/home" className=" ">
                    <span className="my-logo-inside">
                      <img src={Logo02} alt="" className="" />
                    </span>
                  </Link>
                </Row>

                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
