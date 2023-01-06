import React from "react";
import GraphImg from "../assets/img/png/why-img.png";
const Why = () => {
  return (
    <div className="why_bg py-3 py-lg-5">
      <div className="container" id="spirit">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2 className="color_white fw_xbold fs_xl">Why FITFIVE?</h2>
              <p className="fw_regular fs_sm color_white">
                Consequat pellentesque nunc porttitor viverra accumsan, pharetra
                tempus. Sem consectetur lobortis nullam dignissim nulla
                volutpat, scelerisque felis. Condimentum duis fringilla tellus
                placerat viverra et. Lectus vitae ac lobortis arcu. Nulla
                posuere ac egestas aenean scelerisque.
              </p>
              <button className="get-btn color_white fw_semi_bold fs_sm">
                Get Started
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img className="w-100" src={GraphImg} alt="graph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
