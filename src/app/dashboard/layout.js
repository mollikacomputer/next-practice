import React from 'react';
import Sidebar from './Sidebar';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default layout;