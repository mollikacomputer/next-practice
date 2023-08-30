import NavLink from "@/components/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/users',
        title:'Users'
    },
    {
        path:'/dashboard/addproduct',
        title:'Add Product'
    },
    {
        path:'/dashboard/manageproduct',
        title:'Manage Product'
    },
    {
        path:'/',
        title:'Home'
    },
]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h2 className="text-3xl font-samebold">Dashboard</h2>
            <ul className="grid ">
            {
                navLinks.map(({path, title}) => (
                <li key={path} >
                  <NavLink exact activeClassName='text-blue-500' href={path} >
                    {title} 
                  </NavLink>
                </li>
                ))
            }
            </ul>
        </aside>
    );
};

export default Sidebar;