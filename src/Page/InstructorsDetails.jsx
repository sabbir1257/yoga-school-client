import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const InstructorsDetails = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-yoga-school-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
       <Helmet>
        <title>Yoga School | Instructors Details</title>
      </Helmet>
      <h1 className="text-5xl text-center w-2/5 mx-auto font-bold mt-8 py-4 text-gray-800 border-b-4">
        Our Teachers
      </h1>
      <h2 className="text-lime-500 text-center py-4 mb-8">
        Best Yoga Teachers are Here for You
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {details.map((detail) => (
          <div key={detail._id} className="md:flex bg-base-200 rounded-lg mx-auto md:w-3/4">
            <img className="w-screen md:w-2/5 rounded-lg" src={detail.photoUrl} alt="" />
            <div className="md:ml-4 p-4">
                <h1 className="text-3xl my-2 font-bold text-gray-700">{detail.name}</h1>
                <h2 className="text-2xl ml-2 font-semibold my-2">Profile <span className="text-lime-500">Details:</span></h2>
                <p><span className="font-bold ml-4">Experience:</span> {detail.experience}</p>
                <p><span className="font-bold ml-4">Experience:</span> {detail.categories}</p>
                <h1 className="text-2xl font-semibold ml-2 my-2">Personal <span className="text-lime-500">Details:</span></h1>
                <p><span className="font-bold ml-4">Address:</span> {detail.address}</p>
                <p><span className="font-bold ml-4">Phone:</span> {detail.phone}</p>
                <p><span className="font-bold ml-4">Age:</span> {detail.age}</p>
                <p><span className="font-bold ml-4">Email:</span> {detail.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsDetails;


