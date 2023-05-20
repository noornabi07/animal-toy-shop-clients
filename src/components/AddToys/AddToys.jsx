import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    const {user} = useContext(AuthContext)

    const handleAddToy = event =>{

        event.preventDefault();
        const form = event.target;
        const sellerName = user?.displayName;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const message = form.message.value;
        const toys = {sellerName, toyName, photo, email, subCategory, price, rating, quantity, date, message}
        console.log(toys)

        fetch('https://animal-toys-server-five.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Your Toys Add Done',
                    text: "Thank You So Much"
                  })
            }
        })

    }

    return (
        <div>
            <div className="mx-20 shadow-2xl border my-16 rounded-lg bg-slate-200 py-4">
                <h2 className='text-center font-bold text-4xl text-purple-600'>Add  <span className='text-red-500'>A</span> Toy</h2>
                <form onSubmit={handleAddToy}>
                    <div className="card-body">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Toy Seller Name</span>
                                </label>
                                <input type="text" placeholder='Toy Seller Name' name='sellerName' defaultValue={user?.displayName} className="input input-info input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Toy Name</span>
                                </label>
                                <input type="text" name='toyName' placeholder="Enter Your Toy Name" className="input input-info input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Toy Photo Url</span>
                                </label>
                                <input type="text" name='photo' defaultValue="" className="input input-info input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Seller Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} className="input input-bordered input-info" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Sub Category</span>
                                </label>
                                <select type="text" name='subCategory' className="input input-bordered input-info">
                                    <option value="teddy">teddy</option>
                                    <option value="hors">hors</option>
                                    <option value="cat">cat</option>
                                    <option value="dinosaur">dinosaur</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Toy Prices</span>
                                </label>
                                <input type="text" name='price' defaultValue="" className="input input-info input-bordered" placeholder='Enter Your Price' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Toy Rating</span>
                                </label>
                                <input type="text" name='rating' defaultValue="" className="input input-info input-bordered" placeholder='Enter Your Rating' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' defaultValue="" className="input input-info input-bordered" placeholder='Enter Quantity' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-green-600">Date</span>
                                </label>
                                <input type="date" name='date' defaultValue="" className="input input-bordered input-info" />
                            </div>

                        </div>

                        <div className="form-control mt-3">
                            {/* <input className="btn bg-red-600 btn-block" type="text" value="Order Confirm" /> */}
                            <textarea className='form-control border-2 rounded-lg p-3' name="message" type="text" id="text" cols="30" rows="5" placeholder='Please Message Here'></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn bg-teal-600 btn-block" type="submit" value="Add Toy" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;