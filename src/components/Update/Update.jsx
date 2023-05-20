import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const Toys = useLoaderData();
   const { sellerName, toyName, message, quantity, _id, price } = Toys;

   const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const message = form.message.value;
        const updateToys = {price, quantity, message}
        console.log(updateToys)

        fetch(`http://localhost:5000/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toys Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
   }

    return (
        <div className='px-20 text-center my-10'>
            <form onSubmit={handleUpdate}  className='bg-slate-200 py-10 rounded-xl'>
                <h4 className='text-3xl font-bold text-teal-600 mb-3'>Update Toys: <span className='text-red-500'>{toyName}</span></h4>
                <div className='p-4'>

                    <div>
                        <input type="text" name='price' defaultValue={price} placeholder="Toy Price" className="input input-bordered input-info mx-2 w-full max-w-xs" />

                        <input type="text" name='quantity' defaultValue={quantity} placeholder="available quantity" className="input input-bordered mb-4 input-info w-full max-w-xs" />
                    </div>

                    <input type="text" name='message' defaultValue={message} placeholder="Update Details" className="input input-bordered input-info ml-2 w-[650px]" />

                    <input type="submit" className='input-bordered bg-orange-600 py-2 mt-3 font-bold rounded-lg hover:bg-gray-600 hover:duration-300 text-white input-primary w-[650px]' value="Update Toys" />
                </div>
            </form>
        </div>
    );
};

export default Update;