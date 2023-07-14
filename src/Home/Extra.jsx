import React from "react";
import img1 from "../assets/ex-1.png";
import img2 from "../assets/land-rev5-icon1-.png";
import img3 from "../assets/ex-2.png";
import img4 from "../assets/ex-3.png";
import img5 from "../assets/ex-4.png";
import img6 from "../assets/ex-5.png";
import img7 from "../assets/ex-6.png";
import img8 from "../assets/ex-7.png";

const Extra = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">
        Remarkable <span className="text-lime-500">features</span> that ensure
        smooth <br /> website creation
      </h1>
      <div className="grid md:grid-cols-4 text-center my-8">
        <div className="mx-auto text-center">
          <img className="my-4 mx-auto" src={img1} alt="" />
          <h1 className="text-2xl my-3 font-semibold">Timetable Responsive</h1>
          <p>
            A premium plugin for creating <br /> timetables comes bundled for
            free
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img2} alt="" />
          <h1 className="text-2xl my-3 font-semibold">Elementor Plugin</h1>
          <p>
            Build with the astounding frontend <br /> drag-&-drop Elementor
            plugin
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img3} alt="" />
          <h1 className="text-2xl my-3 font-semibold">Slider Revolution</h1>
          <p>
            Another plugin included for free, ideal <br /> for creating slider
            presentations
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img4} alt="" />
          <h1 className="text-2xl my-3 font-semibold">One-click Import</h1>
          <p>
            Get the demo content in its entirety <br /> using just a single
            mouse click
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img5} alt="" />
          <h1 className="text-2xl my-3 font-semibold">Fully Responsive</h1>
          <p>
            Designed to look and feel stunning on <br /> all types of devices
            and screen sizes
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img6} alt="" />
          <h1 className="text-2xl my-3 font-semibold">900+ Fonts</h1>
          <p>
            Typography selection is in your hands with over 900 Google Fonts
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img7} alt="" />
          <h1 className="text-2xl my-3 font-semibold">Color Change</h1>
          <p>
            Change the main color or the color of any other element with ease{" "}
          </p>
        </div>
        <div>
          <img className="my-4 mx-auto" src={img8} alt="" />
          <h1 className="text-2xl my-3 font-semibold">Help Center</h1>
          <p>
            If you need assistance check out our Help Center or reach our
            support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
