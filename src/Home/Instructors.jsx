import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-yoga-school-server.vercel.app/popular-instructors")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center w-2/5 mx-auto font-bold mt-8 py-4 text-gray-800 border-b-4">
        Our Teachers
      </h1>
      <h2 className="text-lime-500 text-center py-4 mb-8">
        Best Yoga Teachers are Here for You
      </h2>
      <div className="grid md:grid-cols-3 md:gap-8">
        {instructor.map((teacher) => (
          <div className="w-2/4 mx-auto" key={teacher._id}>
            <Link to="/instructors-details">
              <img className="rounded-full" src={teacher.photoUrl} alt="" />
            </Link>
            <Link to="/instructors-details">
              <p className="text-center my-2 text-2xl">{teacher.categories}</p>
              <p className="text-center text-lime-500 ">{teacher.name}</p>
            </Link>
          </div>
        ))}
       
      </div>
     <div className=" text-center my-8">
     <Link
          to="/instructors-details"
          className="btn bg-lime-500 hover:bg-lime-700 hover:text-white"
        >
          All Instructors
        </Link>
     </div>
    </div>
  );
};

export default Instructors;
