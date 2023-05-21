import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    useTitle('Login')

    const {signIn, signInGoogle} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setSuccess('')

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            event.target.reset();
            setSuccess('Success Login Account')
            navigate(from)
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGoogleSign = () =>{
        signInGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            setSuccess('Success Login Account');
            navigate(from)

        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="w-96 mx-auto bg-gray-300 border-2 mb-10 mt-10 p-5 rounded-lg">

                <h3 className='text-2xl font-bold text-purple-700 text-center mb-3'>Login Your Account!!</h3>

                <p className='text-2xl font-semibold text-center text-green-400'>{success}</p>
                <p className='text-2xl text-center font-semibold text-red-600'>{error}</p>

                <label className="font-semibold"><h6>Your Email</h6></label>
                <input type="email" required placeholder="Your Email" name='email' id='email' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Password</h6></label>
                <input type="password" name='password' id='password' required placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs mb-3" />

                <button onClick={handleGoogleSign} className="btn flex w-full max-w-xs mb-2">
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