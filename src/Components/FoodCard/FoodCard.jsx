const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

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
            <button className="btn btn-outline border-0 border-b-2 border-yellow-600 text-yellow-600">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
