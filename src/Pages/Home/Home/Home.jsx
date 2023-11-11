import PopularMenu from "../../PopularMenu/PopularMenu";
import Cover from "../../Shared/Cover/Cover";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonials/Testimonial";

import { Helmet } from "react-helmet-async";

import coverImg from "../../../assets/menu/banner3.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | HOME</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Cover
        img={coverImg}
        title="Bistro Boss"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium!"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
