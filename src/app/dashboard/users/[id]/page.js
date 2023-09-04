import React from 'react';

const page = (params) => {
    return (
        <div>
            {params.id} {params.name}
        </div>
    );
};

export default page;