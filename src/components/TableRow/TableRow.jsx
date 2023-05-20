import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRow = ({ toy, index, handleDelete }) => {
    const { sellerName, toyName, subCategory, quantity, _id } = toy;


    return (
        <>
            <tr>
                <th className='text-green-500'>{index + 1}</th>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
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