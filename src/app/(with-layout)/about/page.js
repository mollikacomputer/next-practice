import wait from '@/utils/wait';
import React from 'react';

export const metadata = {
    title: 'About Page',
    description: 'About page description',
  }

const AboutPage = async () => {
    await wait();
    return (
        <div>
            <h2 className='text-3xl'>About Page</h2>
        </div>
    );
};

export default AboutPage;