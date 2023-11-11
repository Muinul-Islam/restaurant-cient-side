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
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
