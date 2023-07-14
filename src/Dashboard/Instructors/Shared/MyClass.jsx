import { Helmet } from "react-helmet";
import useMyClasses from "../../../Hooks/useMyClasses";
import ClassTable from "../components/ClassTable";



const MyCourse = () => {
    const { classes } = useMyClasses()

    return (
        <main className='h-screen overflow-hidden'>
             <Helmet>
        <title>Yoga School |My Classes</title>
      </Helmet>
            <div className='flex items-center justify-between mt-20 font-bold'>
                <h3 className='text-2xl'>My Classes: {classes.length > 0 ? classes.length : 0}</h3>
            </div>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full table'>
                    <thead >
                        <tr className=' bg-lime-500'>
                            <th></th>
                            <th>Class Image</th>
                            <th>Total enrolled</th>
                            <th>Class Name</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            classes && classes.map((singleClass, i) => <ClassTable key={singleClass._id} i={i} singleClass={singleClass} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default MyCourse;