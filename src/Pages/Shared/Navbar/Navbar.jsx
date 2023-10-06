import { Link, NavLink, useNavigate } from "react-router-dom";
import userDefaultImg from "/public/assets/user.png";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully.");
        navigate("/");
      })
      .catch(() => {
        toast.error("Logout failed.");
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mx-4">
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user ? (
                <img src={user.photoURL} />
              ) : (
                <img src={userDefaultImg} alt="" />
              )}
            </div>
          </label>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> */}
        </div>
        <Link to="/login">
          {user ? (
            <button
              onClick={handleLogOut}
              className="ml-2 px-11 py-3 bg-[#3648e6] text-white"
            >
              Log Out
            </button>
          ) : (
            <button className="ml-2 px-11 py-3 bg-[#403F3F] text-white">
              Log In
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
