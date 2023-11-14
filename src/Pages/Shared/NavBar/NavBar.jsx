import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCartCheckFill } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/">
          <button className="text-2xl flex justify-center items-center">
            <BsCartCheckFill></BsCartCheckFill>
            <div className="badge badge-secondary ml-2">+0</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed bg-opacity-20 z-10 bg-black max-w-screen-xl mx-auto text-white">
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
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* <span>{user?.displayName}</span> */}
              <button onClick={handleLogOut} className="btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <>
              {" "}
              <li className="btn btn-ghost">
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
