import Navbar from '@/components/Navbar';
import React from 'react';

const layoutPage = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layoutPage;