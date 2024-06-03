import React, { Fragment } from "react";
import Banner2 from "./Banner2";

import Kohli from "../images/1.jpeg";
import Kohli1 from "../images/2.jpeg";

export default function Banner() {
  return (
    // Parent tag Fragmentation
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quis perferendis illo voluptatibus aperiam dolorum?
        </p>
        <Banner2 />
        <Banner2 />
        <Banner2 />
        <img src={Kohli} alt="" />
        <img src={Kohli1} alt="" />
        <img src={require("../images/3.jpeg")} alt="" />
        <img src={require("../images/4.jpeg")} alt="" />
      </div>
    </>
  );
}
