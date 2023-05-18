import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <form className="w-96 mx-auto border-2 mt-10 p-5 rounded-lg">

                <h3 className='text-2xl font-bold text-purple-700 text-center mb-3'>Login Your Account!!</h3>

                <p className='text-2xl font-semibold text-center text-green-400'></p>
                <p className='text-2xl text-center font-semibold text-red-600'></p>

                <label className="font-semibold"><h6>Your Email</h6></label>
                <input type="email" required placeholder="Your Email" name='email' id='email' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Password</h6></label>
                <input type="password" name='password' id='password' required placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs mb-3" />

                <button className="btn flex w-full max-w-xs mb-2">
                    <FaGoogle></FaGoogle>
                    <p className='ml-3'>Sign In Google</p>

                </button>

                <input type="submit" value="Login" className='btn btn-primary w-full max-w-xs' />

                <p className='mt-4 text-center' style={{ fontWeight: 'bold' }}>Do Not Have An Account ?
                    <small>
                        <Link to="/register" className='text-red-500 text-xl'> Register</Link>
                    </small>
                </p>
            </form>
        </div>
    );
};

export default Login;