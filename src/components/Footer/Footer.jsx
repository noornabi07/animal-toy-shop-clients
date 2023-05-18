import React from 'react';
import logo from '../../../public/animal-2.png'
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-teal-600 text-white">
                <div>
                   <img className='w-40 rounded-full' src={logo} alt="" />
                    <p className='font-semibold'>Animal Toys Shop.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Animal Toys</a>
                    <a className="link link-hover">Kids Toys</a>
                    <a className="link link-hover">Learning Toys</a>
                    <a className="link link-hover">Musical Toys</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">Mobile: 01826147180</a>
                    <a className="link link-hover">Email: noornabiprogram07@gmail.com</a>
                    <a className="link link-hover">Address: Dinajpur</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">
                        <FaFacebook className='text-3xl hover:rotate-45 hover:duration-500'></FaFacebook>
                    </a>
                    <a className="link link-hover">
                        <FaTwitter className='text-3xl hover:rotate-45 hover:duration-500'></FaTwitter>
                    </a>
                    <a className="link link-hover">
                        <FaInstagram className='text-3xl hover:rotate-45 hover:duration-500'></FaInstagram>
                    </a>
                    <a className="link link-hover">
                        <FaGithub className='text-3xl hover:rotate-45 hover:duration-500'></FaGithub>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;