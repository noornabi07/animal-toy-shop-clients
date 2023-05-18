import React, { useEffect } from 'react';
import { useState } from "react";
import  './CategoryToys.css'
import Toys from '../Toys/Toys';

const CategoryToys = () => {
    const [toys, setToys] = useState([])
    const [toggleState, setToggleState] = useState('teddy bear');

    const toggleTab = (tabName) => {
        setToggleState(tabName);
    };

    useEffect( () =>{
        fetch(`http://localhost:5000/allToys/${toggleState}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }, [toggleState])

     
    return (

        <div className="px-20 mt-20">
            <h2 className='text-center text-teal-600 font-bold text-3xl mb-8'>Shop By <span className='text-red-500'>Category</span> Toys</h2>
            <div className="bloc-tabs text-red-600 font-bold">
                <button
                    className={toggleState === 'teddy bear' ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab('teddy bear')}
                >
                    Teddy Bear
                </button>
                <button
                    className={toggleState === 'hors' ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab('hors')}
                >

                    Horse
                </button>
                <button
                    className={toggleState === 'cat' ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab('cat')}
                >
                    Cats
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 'teddy bear' ? "content  active-content" : "content"}
                >
                    <h2>Content 1</h2>
                    <hr />
           
                </div>

                <div
                    className={toggleState === 'hors' ? "content  active-content" : "content"}
                >
                    <h2>Content 2</h2>
                    <hr />

                </div>

                <div
                    className={toggleState === 'cat' ? "content  active-content" : "content"}
                >
                    <h2>Content 3</h2>
                    <hr />
      
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mb-10'>
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