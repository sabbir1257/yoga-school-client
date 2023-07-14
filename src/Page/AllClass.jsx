import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import useClasses from "../Hooks/useClasses";
import SingleClassCart from "./SingleClassCart";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AllClass = () => {

  const { classes } = useClasses("Approved");
  const { user } = useAuth();
  const navigate = useNavigate();
  const { axiosSecure } = useAxiosSecure();
  const seletedClass = async (singleClass) => {
    if (user?.email) {
      const addToClass = {
        class_id: singleClass._id,
        class_name: singleClass.class_name,
        class_image: singleClass.class_image,
        instructor_name: singleClass.instructor_name,
        instructor_email: singleClass.instructor_email,
        price: singleClass.price,
        email: user?.email,
      };

      const res = await axiosSecure.post("/select-class", addToClass);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "This class is selectd",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } else {
      Swal.fire({
        title: "Login In First",
        text: "Without login you are not select any class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Yoga School | All Class</title>
      </Helmet>
      <h1 className="text-5xl text-center w-2/5 mx-auto font-bold mt-8 py-4 text-gray-800 border-b-4">
        All Classes
      </h1>
      <h2 className="text-lime-500 text-center py-4 mb-8">
        Choose Your Level and Focus
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {classes.map((student) => <SingleClassCart key={student._id} seletedClass={seletedClass} student={student}></SingleClassCart>)}
      </div>
    </div>
  );
};

export default AllClass;
