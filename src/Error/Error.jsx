import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Zoom>
        <div className="text-center">
          <h1 className="text-4xl sm:text-9xl text-red-500 font-bold">404</h1>
          <p className="text-lg sm:text-2xl text-gray-800 mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Go back to home
          </Link>
        </div>
      </Zoom>
    </div>
  );
};

export default Error;
