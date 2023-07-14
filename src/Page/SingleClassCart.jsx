import React from "react";

const SingleClassCart = ({ student, seletedClass }) => {
  const { class_name, class_image, instructor_name, avilable_seats, price } =
    student;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="w-full md:h-[300px]" src={class_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{class_name}</h2>
          <h3>
            <span className="font-bold">Instructor Name:</span>{" "}
            {instructor_name}
          </h3>
          <h3>
            <span className="font-bold">Available Seats:</span> {avilable_seats}
          </h3>
          <p className="mb-4">
            <span className="font-bold"> Price:</span> ${price}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => seletedClass(student)}
              className="btn bg-lime-500 hover:bg-lime-700 w-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClassCart;
