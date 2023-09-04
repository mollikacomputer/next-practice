import React from 'react';

const loadSingleDate = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
};

export default loadSingleDate;