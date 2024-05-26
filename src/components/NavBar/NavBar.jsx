import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold  border-2  rounded-lg border-amber-500" : ""
        }>Home</NavLink></li>
        <li><NavLink to="/all" className={({ isActive }) =>
            isActive ? "font-bold  border-2  rounded-lg border-amber-500" : ""
        }>All Foods</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) =>
            isActive ? "font-bold  border-2  rounded-lg border-amber-500" : ""
        }>Gallery</NavLink></li>

        {
            user ?
                <>
                    {/* <li><NavLink to="/add" className={({ isActive }) =>
                        isActive ? "font-bold  border-2  rounded-lg border-amber-500" : ""
                    }>Add Tourists Spot</NavLink></li>
                    <li><NavLink to="/list" className={({ isActive }) =>
                        isActive ? "font-bold  border-2  rounded-lg border-amber-500" : ""
                    }>My List</NavLink></li> */}
                </>
                :
                <></>
        }
    </>

    return (
        <div className="navbar bg-base-100 z-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold font-lilita"><span className=" text-amber-500">Dine</span>Genius</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ?
                        <>
                            <button onClick={handleSignOut} className="btn  bg-amber-500 text-white text-lg px-8 rounded-none">Log Out</button>

                            <div className="dropdown dropdown-end relative z-30 tooltip" data-tip={user?.displayName || "User Name not found"}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className=" rounded-full" >
                                        <img alt="Tailwind CSS Navbar componen" src={user?.photoURL
                                            || "https://i.ibb.co/Y0RBQqQ/download.png"} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 -ml-36 ">
                                    <Link to="/MyAdddFood"><li><a>My Added Food</a></li></Link>
                                    <Link to="/add"><li><a>Add a Food</a></li></Link>
                                    <Link to="/MyOrderedFood"><li><a>My Ordered Food</a></li></Link>

                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn rounded-none bg-amber-500 text-white text-lg px-8">Login</button>
                            </Link>
                            <Link to='/register'>
                                {/* <button className="btn rounded-none bg-amber-500 text-white text-lg px-8 ">Register</button> */}
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};

export default NavBar;