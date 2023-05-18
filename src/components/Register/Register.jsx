import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form className="w-96 mx-auto border-2 mt-10 p-5 rounded-lg">

                <h3 className='text-2xl font-bold text-purple-700 text-center mb-4'>Register Your Account!!</h3>
                <p className='text-2xl font-semibold text-center text-green-400'></p>
                <p className='text-2xl text-center font-semibold text-red-600'></p>
                <label className="font-semibold"><h6>Your Name</h6></label>
                <input type="text" required placeholder="Your Name" name='name' id='name' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Photo URL</h6></label>
                <input type="text" required placeholder="Photo URL" name='photo' id='photo' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Email</h6></label>
                <input type="email" required placeholder="Your Email" name='email' id='email' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Password</h6></label>
                <input type="password" required name='password' id='password' placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs mb-2" /> <br />

                <input type="submit" value="Register" className='btn btn-primary w-full max-w-xs' />

                <p className='mt-4 text-center' style={{ fontWeight: 'bold' }}> Have An Account ?
                    <small>
                        <Link to="/login" className='text-red-500 text-xl font-bold'> Login</Link>
                    </small>
                </p>
            </form>
        </div>
    );
};

export default Register;