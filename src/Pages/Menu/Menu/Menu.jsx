import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        info="Would you like to try a dish?"
      ></Cover>
      <div className="my-12">
        <SectionTitle
          subHeading="Don't Miss"
          heading="Today's Offer"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>

      <MenuCategory
        items={dessert}
        img={dessertImg}
        title="desserts"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title="pizza"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      <MenuCategory
        items={soup}
        img={soupImg}
        title="soups"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      <MenuCategory
        items={salad}
        img={saladImg}
        title="salads"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
