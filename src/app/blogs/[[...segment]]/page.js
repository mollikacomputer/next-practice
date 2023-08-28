import React from 'react';

const page = ({params}) => {
    const [year, id] = params.segment || [];
    return (
        <div>
            <h2> Dynamic page {year || new Date().getFullYear()} for {id } </h2>
        </div>
    );
};

export default page;