import React from "react";
import { GoDash } from "react-icons/go";
import CompartmentItem from "./CompartmentItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Compartment = () => {
  return (
    <div className="my-5 ">
      <div className="text-[1.5rem] flex justify-between">
        <h4 className="font-semibold">HÀNG MỚI VỀ</h4>
        <GoDash />
      </div>
      <Carousel
        swipeable={false}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        containerClass="carousel-container pb-6 pt-2"
        itemClass="carousel-item-padding-40-px"
      >
        <CompartmentItem />
        <CompartmentItem />
        <CompartmentItem />
        <CompartmentItem />
        <CompartmentItem />
        <CompartmentItem />
        <CompartmentItem />
      </Carousel>
    </div>
  );
};

export default Compartment;
