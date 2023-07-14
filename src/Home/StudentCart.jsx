import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import usePopularClasses from "../Hooks/usePopularClasses";

const StudentCart = () => {
  const { popularClasses } = usePopularClasses();

  return (
    <div>
    <h1 className="text-5xl text-center w-2/5 mx-auto font-bold mt-8 py-4 text-gray-800 border-b-4">Our Classes</h1>
      <h2 className="text-lime-500 text-center py-4 mb-8">Choose Your Level and Focus</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {popularClasses.map((student) => (
          <div className="card w-96 bg-base-100 shadow-xl mx-auto" key={student._id}>
            <Fade cascade>
            <figure>
              <img className="w-full md:h-[300px] rounded-lg" src={student.class_image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{student.yoga_class_name}</h2>
              <h3><span className="font-bold">Instructor Name:</span> {student.instructor_name}</h3>
              <h3><span className="font-bold">Available Seats:</span> {student.available_seats}</h3>
              <p className="mb-4"><span className="font-bold"> Price:</span> ${student.price}</p>
              <div className="card-actions justify-end">
                <Link className="btn bg-lime-500 hover:bg-lime-700 w-full  hover:text-white">Buy Now</Link>
              </div>
            </div>
            </Fade>
          </div>
        ))}
      </div>
      <div className=" text-center my-8">
     <Link
          to="/all-class"
          className="btn bg-lime-500 hover:bg-lime-700 hover:text-white"
        >
          All Class
        </Link>
     </div>
    </div>
  );
};

export default StudentCart;
