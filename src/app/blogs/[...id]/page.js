import React from 'react';

const page = ({params}) => {
    console.log(params.id);
    return (
        <div>
            <h2> Dynamic page {params.id} </h2>
        </div>
    );
};

export default page;