import { GoDash } from "react-icons/go";
import CompartmentItem from "src/components/CompartmentItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { card_product } from "src/types/product_type";
import { useEffect, useState } from "react";
import ProductListSkeleton from "src/components/ProductListSkeleton";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Compartment = ({
  title,
  data,
  isLoading,
}: {
  title: string;
  data: any;
  isLoading: boolean;
}) => {
  console.log(data);
  return (
    <>
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <div className="my-5 ">
          <div className="text-[1.5rem] flex justify-between">
            <h4 className="font-semibold">{title}</h4>
            <GoDash />
          </div>
          <Carousel
            swipeable={false}
            draggable={true}
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            containerClass="carousel-container pb-6 pt-2"
            itemClass="carousel-item-padding-40-px"
          >
            {data.data.map((item: any, index: number) => {
              return <CompartmentItem infor={item} key={index} />;
            })}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Compartment;
