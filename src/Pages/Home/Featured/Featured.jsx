import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg";

import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-6">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-6 px-12 space-y-4 md:pb-20 md:px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-3">
          <p>March 20, 2023</p>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Indulge your senses in the exquisite delight of our featured dish, a
            culinary masterpiece that captures the essence of innovation and
            taste. Crafted with precision and passion by our skilled chefs, the
            featured food is a symphony of flavors, blending premium ingredients
            to create a harmonious and unforgettable dining experience. From the
            first savory bite to the lingering aftertaste, each element is
            thoughtfully curated to elevate your gastronomic journey.
          </p>
          <button className="btn btn-outline border-0 border-b-2 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
