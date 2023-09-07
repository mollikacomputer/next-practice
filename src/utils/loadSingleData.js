import React from 'react';

const loadSingleData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        // cache:'no-cache', for server
        cache:'force-cache' // for static generation
    });
    return res.json();
};

export default loadSingleData;