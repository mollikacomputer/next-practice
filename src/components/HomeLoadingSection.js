import wait from '@/utils/wait';
import React from 'react';

const HomeLoadingSection = async () => {
    await wait();
    return (
        <div>
            <h2 className='text-3xl font-samebold'>Home Page Loading Section only</h2>
        </div>
    );
};

export default HomeLoadingSection;