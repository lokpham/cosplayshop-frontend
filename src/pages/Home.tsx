import { Carousel } from "antd";
import React from "react";
import item1 from "../assets/carousel/item1.png";
import item2 from "../assets/carousel/item2.png";
import Compartment from "../components/Compartment";
const carousel_data = [item1, item2];

const Home = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto shadow-md">
        <Carousel className="" arrows autoplay infinite>
          {carousel_data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  className="w-full md:h-[400px] h-[300px] object-fill md:object-cover"
                  src={item}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <Compartment />
      <Compartment />
    </div>
  );
};

export default Home;
