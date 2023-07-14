import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import useUsers from '../../../Hooks/useUsers';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import ManageUserCard from '../components/ManageUserCart';

const ManageUsers = () => {
    const { refetch, users } = useUsers()
    const { axiosSecure } = useAxiosSecure()
    const updateUserRole = async (role, id) => {
        const res = await axiosSecure.put(`/change-user-role/${id}`, { role })
        if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Student Role Has Updated',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    const deleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-user/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }



    return (
        <main className='h-screen overflow-hidden'>
             <Helmet>
        <title>Yoga School | Manage Users</title>
      </Helmet>
            <div className='flex justify-between items-center font-semibold mt-20'>
                <h3 className='text-2xl mb-2'>Total Users: {users.length > 0 ? users.length : 0}</h3>
            </div>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full table'>
                    <thead >
                        <tr className='bg-lime-500 '>
                            <th>SL</th>
                            <th>USER IMAGE</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            users && users.map((user, i) => <ManageUserCard key={user._id} i={i} user={user} updateUserRole={updateUserRole} deleteUser={deleteUser} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default ManageUsers;