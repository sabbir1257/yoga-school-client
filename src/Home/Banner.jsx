import React from "react";
import banner1 from "../assets/bannner-title-4.png";
import banner2 from "../assets/banner-title-2.webp";
import banner3 from "../assets/banner-title-3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src={banner1}
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={banner2}
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={banner3}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
