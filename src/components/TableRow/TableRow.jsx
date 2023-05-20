import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRow = ({ toy, index, handleDelete }) => {
    const { sellerName, email, price, toyName, rating, subCategory, quantity, _id, photo } = toy;


    return (
        <>
            <tr>

                <td className='text-green-500 font-bold'>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{sellerName}</div>
                        </div>
                    </div>
                </td>
                <td>{email}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <th className='text-orange-400'>{rating}</th>
                <td>{quantity}</td>
                <td>
                    <Link to={`/updateToy/${_id}`}>
                        <button className="btn btn-sm">Update</button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500">
                        <FaTrash></FaTrash>
                    </button>
                </td>
            </tr>
        </>

    );
};

export default TableRow;