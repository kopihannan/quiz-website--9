import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/77620-404-website-error-animation.json";
import './Error.css'
const Error = () => {
    return (
        <div className='error flex justify-evenly items-center'>
            <Lottie  animationData={groovyWalkAnimation} loop={true} />;
            <h1 className='font-bold text-4xl text-red-700'>404 Page Not Found</h1>
        </div>
    );
};

export default Error;