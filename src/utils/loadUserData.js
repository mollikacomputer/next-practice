const loadUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache: "force-cache",
    });
    return res.json();
};
export default loadUserData;