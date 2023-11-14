import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    console.log(food, user.email);
    if (user && user.email) {
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axios
        .post("http://localhost:5000/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.isInsertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${name} Added To The Cart`,
              icon: "success",
            });
          }
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    } else {
      Swal.fire({
        title: "You Are Not Logged In Yet",
        text: "Please Log In To Add Product To The Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p
          className="absolute right-0 p-1 mr-5 mt-2
         rounded-lg bg-black text-white"
        >
          ${price}
        </p>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-2 border-yellow-600 text-yellow-600"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
