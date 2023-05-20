import React from 'react';

const Update = () => {
    return (
        <div className='px-20 text-center my-10'>
            <form  className='bg-slate-200 py-10 rounded-xl'>
                <h4 className='text-3xl font-bold text-purple-800 mb-3'><span className='text-red-500'>Update Your</span> Toys: </h4>
                <div className='p-4'>

                    <div>
                        <input type="text" name='price' defaultValue="" placeholder="Toy Price" className="input input-bordered input-info mx-2 w-full max-w-xs" />

                        <input type="text" name='quantity' defaultValue="" placeholder="available quantity" className="input input-bordered mb-4 input-info w-full max-w-xs" />
                    </div>

                    <input type="text" name='Details' defaultValue="" placeholder="Update Details" className="input input-bordered input-info ml-2 w-[650px]" />

                    <input type="submit" className='input-bordered bg-orange-600 py-2 mt-3 font-bold rounded-lg hover:bg-gray-600 hover:duration-300 text-white input-primary w-[650px]' value="Update Toys" />
                </div>
            </form>
        </div>
    );
};

export default Update;