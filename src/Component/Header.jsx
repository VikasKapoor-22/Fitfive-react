import React from "react";
import MenImg from "../assets/img/png/men-img.png";
import Switchimg from "../assets/img/png/switch-img.png";

const Header = () => {
  return (
    <div className="bg-shade">
      <div className="container" id="phy">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img className="w-100" src={MenImg} alt="menimage" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="color_white fw_xbold fs_xl">
                Leave your mark everyday
              </h1>
              <div className="d-flex align-items-center">
                <div className="radio_br">
                  <input type="radio" />
                </div>
                <h3 className="color_white fs_md fw_semi_bold ms-4">Train </h3>
              </div>
              <div className="d-flex align-items-center">
                <div className="radio_br">
                  <input type="radio" />
                </div>
                <h3 className="color_white fs_md fw_semi_bold ms-4">
                  Meditate{" "}
                </h3>
              </div>
              <div className="d-flex align-items-center">
                <input className="checkbtn" type="checkbox" />
                <h3 className="color_white fs_sm fw_semi_bold ms-4">
                  Read 10 pages more...
                </h3>
              </div>
              <img className="mt-5" src={Switchimg} alt="switch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
