import React, { useContext } from 'react';
import logo from '../../../public/animal-2.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const hanldeLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }

    // navbar 
    const navItems = <>
        <li><Link to="/" className='text-xl font-semibold text-white'>Home</Link> </li>
        {user?.email ? <>
            <li> <Link to="/addToys" className='font-semibold text-white'>Add A Toy</Link> </li>
            <li><Link to="/myToys" className='font-semibold text-white'>My Toys</Link></li>

        </>
            : <li> <Link to="/login" className='font-semibold text-white'></Link> </li>
        }
        <li> <Link to="/allToys" className='font-semibold text-white'>All Toys</Link> </li>
        <li> <Link to="/blog" className='font-semibold text-white'>Blogs</Link> </li>
    </>

    return (
        <div className=''>
            {/* <div className="navbar bg-teal-600	 text-white lg:px-20 lg:flex lg:justify-between items-center">
                <div>
                    <img src={logo} className='w-12 rounded-full' alt="" />
                    <h2 className="text-3xl font-bold ml-3">Animal Toys</h2>
                </div>
                <div>
                    <NavLink to="/" className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold lg:inline  block'>
                        Home
                    </NavLink>
                    <NavLink to="/allToys" className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold lg:inline block'>
                        All Toys
                    </NavLink>

                    <NavLink to="/blog" className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold lg:inline  block'>
                        Blogs
                    </NavLink>

                    {
                        user && <>
                            <NavLink to="/addToys" className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold lg:inline block'>
                                Add Toys
                            </NavLink>

                            <NavLink to="/myToys" className='px-3 hover:text-purple-700 hover:duration-700 text-xl font-semibold lg:inline block'>
                                My Toys
                            </NavLink>
                        </>
                    }

                </div>
                <div>
                    {
                        user && <div className='tooltip tooltip-left' data-tip={user.displayName}>
                            <img className='w-12 rounded-full' src={user.photoURL} alt="" />
                        </div>

                    }

                    {
                        user ? <button onClick={hanldeLogOut} className='btn btn-secondary bg-purple-500 ml-3'>LogOut</button> :
                            <Link to="/login"><button className="btn bg-purple-500 btn-secondary">Login</button></Link>
                    }
                </div>
            </div> */}

            {/*  */}
            <div className="navbar bg-teal-600  lg:mx-auto  lg:px-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                    <div className='flex justify-center lg:gap-5 items-center'>

                        <img className='w-12 rounded-full' src={logo} alt="" />
                        <h2 className="lg:text-3xl font-bold lg:ml-3 text-white">Animal Toys</h2>

                    </div>
                </div>
                <div  className="navbar-center hidden  lg:flex">
                    <ul tabIndex={0} className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-2 lg:gap-4'>
                        {user?.email ? <>
                            <div className="tooltip  tooltip-left flex justify-between items-center lg:ml-16 " data-tip={user && user.displayName}>
                                <img className='lg:w-20 w-12 rounded-full' src={user.photoURL} alt="" />
                            </div>
                            <Link to='/login' className="navbar-end"><button onClick={hanldeLogOut} className="btn btn-secondary">LogOut</button> </Link>
                        </>
                            : <Link to='/login' className="navbar">
                                <button className="btn  btn-warning">Login</button>
                            </Link>
                        }
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;