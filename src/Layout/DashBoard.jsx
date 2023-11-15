import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdMenuBook, MdOutlineReviews } from "react-icons/md";

const DashBoard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 h-screen bg-orange-700 text-white">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart className="text-3xl " />
              My Cart
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
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
