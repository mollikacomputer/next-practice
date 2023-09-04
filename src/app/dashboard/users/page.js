import loadUserData from '@/utils/loadUserData';
import Link from 'next/link';
import React from 'react';

const AddUser = async() => {
    const users = await loadUserData();
    return (
        <div>
            <h2 className='text-3xl font-samebold'>Add user</h2>
            {users.map(({ id, name, email }) => (
                <ul className='flex' key={id} >
                    <li className='mr-4'> {id}. {name}</li>
                    <li> <b> email:</b> <i> {email} </i></li>
                    <Link href={`/dashboard/users/${id}`}> Details</Link>
                </ul>
            ))}
        </div>
    );
};

export default AddUser;