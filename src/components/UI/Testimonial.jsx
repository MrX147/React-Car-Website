import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

// import ava01 from "../../assets/all-images/ava-1.jpg";
// import ava02 from "../../assets/all-images/ava-2.jpg";
// import ava03 from "../../assets/all-images/ava-3.jpg";
// import ava04 from "../../assets/all-images/ava-4.jpg";
import ava05 from "../../assets/all-images/ava-5.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Whole City Tour with Eagle Transportations was amazing! Our guide,
          shared fascinating insights. A memorable experience from start to
          finish."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ethan Thompson</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Many Pickup Locations made my travel convenient. Our driver, was
          punctual and friendly. Eagle Transportations is my go-to choice!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ryan Taylor</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Fast & Easy Booking with Eagle Transportations was a game-changer.
          The customer service rep, was efficient and helpful. Will book again!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jessica Miller</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Unlimited Miles Car Rental gave me the freedom to explore. Eagle
          Transportations ensured a smooth rental process. Highly recommended!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Michael Davies</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
