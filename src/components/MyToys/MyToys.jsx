import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import TableRow from '../TableRow/TableRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
// import useSetTitle from '../../Hook/SetTitle/SetTitle';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
    useTitle('My Toys')

    useEffect(() => {
        fetch(`https://animal-toys-server-five.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://animal-toys-server-five.vercel.app/allToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }
    // useSetTitle('my toys')

    return (
        <div className='px-20 my-20'>
            <h2 className='font-bold text-4xl text-teal-500 text-center mb-7'>All <span className='text-red-500'>My</span> Toys</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className='font-bold text-red-600'>
                        <tr>
                            <th>No</th>
                            <th>Name</th>             
                            <th>Email</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                       {

                            myToys.map((toy, index) => <TableRow
                                key={toy._id}
                                toy={toy}
                                index={index}
                                handleDelete={handleDelete}
                            ></TableRow>)
                        }

                    </tbody>
                </table>
            </div>

            {/* modal */}

            {/* Put this part before </body> tag */}
           

        </div>
    );
};

export default MyToys;