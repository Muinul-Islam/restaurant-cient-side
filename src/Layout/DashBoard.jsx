import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdMenuBook, MdOutlineReviews } from "react-icons/md";
import useCart from "../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashBoard = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 h-screen bg-orange-700 text-white">
        <div className="flex justify-center items-center p-4 gap-4">
          <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
          <p>{user.displayName}</p>
        </div>
        <ul className="menu p-4">
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
