import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
  console.log(menu);

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover
        img={orderImg}
        title="Order Food"
        info="Would you like to try a dish?"
      ></Cover>

      <div className="flex justify-center my-4">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Offered</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTab items={offered}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
