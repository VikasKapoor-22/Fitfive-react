import React from "react";
import LogoImg from "../assets/img/png/fitfive-img.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-black ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={LogoImg} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white fs_sm fw_regular" href="#phy">
                  Physique
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white mx-0 mx-lg-5 fs_sm fw_regular"
                  href="#mind"
                >
                  Mind
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white fs_sm fw_regular" href="#spirit">
                  Spirit
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white mx-0 mx-lg-5 fs_sm fw_regular"
                  href="#recovery"
                >
                  Recovery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fs_sm fw_regular" href="#spirit">
                  Nutrition
                </a>
              </li>
            </ul>
            <button className="log_in text-white fs_sm fw_semi_bold">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
