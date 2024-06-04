import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setcategory={setcategory}></ExploreMenu>
    </div>
  );
};

export default Home;
