"use client"
import React, { useEffect } from 'react';

const AboutPageError = ({error, reset}) => {
    useEffect(()=>{
        console.error(error)
    },[error])
    return (
        <div className='text-center'>
            <h2 className="text-3xl">
              {error.message || 'Something Went Wrong happened!'}  
            </h2>
            <button onClick={()=> reset()} > Reset</button>
        </div>
    );
};

export default AboutPageError;