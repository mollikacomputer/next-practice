import React from 'react';

const AddUser = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return (
        <div>
            <h2 className='text-3xl font-samebold'>Add user</h2>
            {users.map(({ id, name, email }) => (
                <ul className='flex' key={id} >
                    <li className='mr-4'> {name}</li>
                    <li> <b> email:</b> <i> {email} </i></li>
                </ul>
            ))}
        </div>
    );
};

export default AddUser;