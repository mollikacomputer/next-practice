import React from 'react';

const ServiceID = ({params}) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            <h2> Services page with Dynamic ID year {year || new Date().getFullYear() } for {id} </h2>
        </div>
    );
};

export default ServiceID;