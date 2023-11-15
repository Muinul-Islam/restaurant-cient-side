import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { MdMenuBook, MdOutlineReviews } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import useCart from "../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashBoard = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);

  const isAdmin = true;

  return (
    <div className="md:flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-700 text-white">
        <div className="flex justify-center items-center p-4 gap-4">
          <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
          <p>{user.displayName}</p>
        </div>
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-3xl " />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife className="text-3xl " />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList className="text-3xl " />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook className="text-3xl " />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-3xl " />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="text-3xl " />
                  My Cart {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome className="text-3xl " />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar className="text-3xl " />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineReviews className="text-3xl " />
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBookings">
                  <FaBook className="text-3xl " />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* Shared navLinks */}
          <div className=" my-5 border border-solid">
            {" "}
            <hr />
          </div>
          <li>
            <NavLink to="/">
              <FaHome className="text-3xl " />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdMenuBook className="text-3xl " />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <IoIosContact className="text-3xl " />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
