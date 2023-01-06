import React from "react";
import Rotationimg from "../assets/img/png/rotation-img.png";
import RunmenImg from "../assets/img/png/runmen-img.png";

const Health = () => {
  return (
    <div className="health-bg">
      <div className="container" id="mind">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img className="w-100" src={Rotationimg} alt="rotationgame" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="fw_bold fs_lg color_white">
                “Individualized health plans{" "}
                <span className="d-block">to enrich your experience”</span>
              </h2>
              <div className="mt-3 mt-lg-5">
                <button className="Join_btn fs_sm fw_regular color_black">
                  Join Now
                </button>
                <img className="ms-4" src={RunmenImg} alt="runmen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
