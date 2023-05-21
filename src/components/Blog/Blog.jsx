import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2 className='text-3xl font-bold text-teal-600 my-6 text-center'>Question Answer:</h2>
            <div className='md:mx-20  bg-gray-300 mt-6 p-6 rounded-lg mx-4'>
                <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> <span className='text-green-700'>Access Token: </span>
                    An access token is a credential that is issued to a client after successful authentication with an identity provider or authorization server. The access token is used to authenticate the client and grant it access to protected resources, such as APIs or specific routes in a web application.
                    <br />
                    <span className='text-green-700'>Refresh Token</span>: A refresh token is a long-lived credential that is also issued to the client during the authentication process. The purpose of the refresh token is to obtain a new access token when the current access token expires.

                    <br />
                    <span className='text-green-700'>Work process: </span> Access tokens should be stored in memory on the client-side, typically in a variable. This allows easy access and retrieval for including the token in API requests.
                    Refresh tokens, on the other hand, should be stored securely on the server-side.
                </p>

                <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>2. Compare SQL and NoSQL databases?</h2>
                <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> SQL databases are relational, use structured schemas, and provide strong data consistency. NoSQL databases are non-relational, have flexible schemas, and prioritize scalability and performance over strict consistency.</p>


                <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>3. What is express js? What is Nest JS?</h2>
                <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and intuitive set of features for building web servers and APIs. Express.js allows developers to handle HTTP requests, define routes, and implement middleware to handle various aspects of request processing. <br /> <br />

                Nest.JS is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and adds additional features and architectural patterns inspired by Angular, such as dependency injection, modules, decorators, and TypeScript support. </p>

                <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>4. What is MongoDB aggregate and how does it work?</h2>
                <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span>MongoDB's aggregate is a method for performing data aggregation operations on collections. It uses a pipeline of stages to process and transform data, allowing operations like filtering, grouping, sorting, and reshaping of documents.
                </p>
            </div>
        </div>
    );
};

export default Blog;