import React, { useEffect } from 'react';
import { useState } from "react";
import './CategoryToys.css'
import Toys from '../Toys/Toys';

const CategoryToys = () => {
    const [toys, setToys] = useState([])
    const [toggleState, setToggleState] = useState("teddy");

    useEffect( () =>{
        fetch(`http://localhost:5000/categoryToys/${toggleState}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    }, [toggleState])

    const toggleTab = (tabName) => {
        setToggleState(tabName);
    };


    return (
        <div className="px-20 my-32">
            <h2 className='text-center font-bold text-teal-600 text-3xl mb-10'>Shop <span className='text-red-500'>Here Category</span> Toys</h2>
            <div className="bloc-tabs">
                <button
                    className={toggleState === "teddy" ? "tabs active-tabs text-teal-700 font-bold" : "font-bold text-red-500 tabs"}
                    onClick={() => toggleTab("teddy")}
                >
                    Teddy Bear
                </button>
                <button
                    className={toggleState === "hors" ? "tabs font-bold text-teal-700 active-tabs" : "text-red-500 font-bold tabs"}
                    onClick={() => toggleTab("hors")}
                >

                    Hors
                </button>
                <button
                    className={toggleState === "cat" ? "tabs text-teal-700 font-bold active-tabs" : "tabs text-red-500 font-bold"}
                    onClick={() => toggleTab("cat")}
                >
                    Cats
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === "teddy" ? "content  active-content" : "content"}
                >
                    <h2 className='font-bold text-teal-600'>Teddy Bears</h2>
                    <hr />
                </div>

                <div
                    className={toggleState === "hors" ? "content  active-content" : "content"}
                >
                    <h2 className='font-bold text-teal-600'>Hors</h2>
                    <hr />
                </div>

                <div
                    className={toggleState === "cat" ? "content  active-content" : "content"}
                >
                    <h2 className='font-bold text-teal-600'>Cats</h2>
                    <hr />
                </div>
            </div>

          <div className='grid grid-cols-3 gap-4'>
            {
                toys.map(toy => <Toys 
                    key={toy._id}
                    toy={toy}
                ></Toys>)
            }
          </div>

          </div>
    );
};

export default CategoryToys;