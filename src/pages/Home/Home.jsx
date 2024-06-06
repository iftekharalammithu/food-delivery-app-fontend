import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/Fooddisplay/FoodDisplay";
import Appdownload from "../../components/Appdownload/Appdownload";

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setcategory={setcategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <Appdownload></Appdownload>
    </div>
  );
};

export default Home;
