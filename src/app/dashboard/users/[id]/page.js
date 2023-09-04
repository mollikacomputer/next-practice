import loadSingleDate from '@/utils/loadSingleDate';
import React from 'react';

const page = async ({params}) => {
    const {id, name, email } = await loadSingleDate(params.id);
    return (
        <div className='flex'>
            {id}, {name}, {email},
        </div>
    );
};

export default page;