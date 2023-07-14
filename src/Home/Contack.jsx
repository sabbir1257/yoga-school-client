import React from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contack = () => {
  return (
    <div>
      <h1 className="text-5xl text-center w-2/5 mx-auto font-bold mt-8 py-4 text-gray-800 border-b-4">
        Our Contact
      </h1>
      <h2 className="text-lime-500 text-center py-4 mb-8">
        Contact us and Join Our Community
      </h2>
      <div className="grid md:grid-cols-3 mx-auto justify-center">
        <div className="mx-auto text-center">
           <FaHome className="text-8xl mx-auto" />
           <p className="text-2xl font-bold">Address:</p>
           <p className="text-center mt-2">Mirpur-1, Dhaka-1216</p>
        </div>
        <div className="text-center">
          <FaPhoneAlt className="text-7xl mt-5 mx-auto" />
          <p className="text-2xl font-bold">Phone:</p>
          <p className="text-center mt-2">+8801995794410</p>
        </div>
        <div className="text-center">
          <MdOutlineMail className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Email:</p>
          <p className="text-center mt-2">sabbirsarker364@gmail.com</p>

        </div>
      </div>
    </div>
  );
};

export default Contack;
