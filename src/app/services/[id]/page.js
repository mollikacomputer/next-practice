import React from 'react';

const ServiceID = ({params}) => {
    console.log(params);
    return (
        <div>
            <h2> Services page with Dynamic ID {params.id} </h2>
        </div>
    );
};

export default ServiceID;