import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import SelectedClassTable from "./SelectedClassTable";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MySelectCourse = () => {
  const { selectedClasses, refetch } = useSelectedClasses();
  const { axiosSecure } = useAxiosSecure();
  // console.log('abbbbb',selectedClasses)
  const deleteSelectedClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-selected-class/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  console.log("class ", selectedClasses);

  return (
    <div className="mt-20 w-[50%]">
      <Helmet>
        <title>Yoga School | My Selectt Coures</title>
      </Helmet>
      <div className="flex items-center justify-between">
        <h1 className="mb-2 text-2xl font-bold">
          Select Class:{selectedClasses.length}
        </h1>
        <Link to="/dashboard/payment">
          <button className="btn bg-lime-500 hover:bg-lime-700  hover:text-white">
            Pay
          </button>
        </Link>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <section className=" overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-lime-500">
                <th>Sl</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses &&
                selectedClasses.map((singleClass, i) => (
                  <SelectedClassTable
                    key={singleClass._id}
                    singleClass={singleClass}
                    i={i}
                    deleteSelectedClass={deleteSelectedClass}
                  />
                ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MySelectCourse;
