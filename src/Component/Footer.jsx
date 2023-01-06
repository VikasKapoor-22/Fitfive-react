import React from "react";
import Footerlogo from "../assets/img/png/fitfive-img.png";
const Footer = () => {
  return (
    <div>
      <div className="container" id="recovery">
        <div className="row">
          <div className="col-12">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className="mx-auto d-block my-3 my-lg-5"
                src={Footerlogo}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="fw_regular fs_sm color_white text-center">
                Condimentum duis fringilla tellus placerat viverra et.{" "}
                <span className="d-block">Lectus vitae ac lobortis arcu.</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-between"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="col-12 col-md-6 col-lg-2 text-center text-lg-start">
            <ul>
              <li className="fw_semi_bold fs_sm color_white">Main </li>
              <li className="mt-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="fw_regular fs_sm color_white" href="#">
                  Testimonials{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 text-center text-lg-start">
            <ul>
              <li className="fw_semi_bold fs_sm color_white">Help</li>
              <li className="my-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="fw_regular fs_sm color_white" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 text-center text-lg-start">
            <ul>
              <li className="fw_semi_bold fs_sm color_white">Legal</li>
              <li className="my-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="fw_regular fs_sm color_white" href="#">
                  Terms And Conditionss
                </a>
              </li>
              <li className="mt-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Consumer’s Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 text-center text-lg-start">
            <ul>
              <li className="fw_semi_bold fs_sm color_white">Elements</li>
              <li className="my-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Spirit
                </a>
              </li>
              <li>
                <a className="fw_regular fs_sm color_white" href="#">
                  Mind
                </a>
              </li>
              <li className="my-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Physique
                </a>
              </li>
              <li>
                <a className="fw_regular fs_sm color_white" href="#">
                  Recovery
                </a>
              </li>
              <li className="mt-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Nutrition
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 text-center text-lg-start">
            <ul>
              <li className="fw_semi_bold fs_sm color_white">Shop </li>
              <li className="my-2">
                <a className="fw_regular fs_sm color_white" href="#">
                  Categories
                </a>
              </li>
              <li>
                <a className="fw_regular fs_sm color_white" href="#">
                  Latest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="fw_regular fs_sm color_white text-center">
          © FitFive 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
