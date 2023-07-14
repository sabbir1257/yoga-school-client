import { Helmet } from "react-helmet";
import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";
import EnrolledClassTable from "./EnrolledClassesTable";


const MyEnrolledCours = () => {
  const { enrolledClasses } = useEnrolledClasses();

  return (
    <main className="h-screen mt-20 overflow-hidden w-[50%]">
         <Helmet>
        <title>Yoga School | Enrolled Course</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">
        Enrolled Classes:{enrolledClasses.length}
      </h1>
      <section className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className=" bg-lime-500">
              <th>Sl</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses &&
              enrolledClasses.map((singleClass, i) => (
                <EnrolledClassTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  i={i}
                />
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default MyEnrolledCours;
