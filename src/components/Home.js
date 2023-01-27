import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!

  const h2Style= {
    color: "firebrick"
  }

  return <div id ="home"> Home
    <h1 style= {h2Style} > {name} is a Web Developer from {city} </h1>
  </div>;
}

export default Home;
