import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, info }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} info={info}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link
        className=" flex justify-center items-center mb-8"
        to={`/order/${title}`}
      >
        {" "}
        <button className="btn btn-outline border-0 border-b-2 text-white">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
