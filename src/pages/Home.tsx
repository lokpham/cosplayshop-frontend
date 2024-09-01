import { Carousel } from "antd";
import item1 from "../assets/carousel/item1.png";
import item2 from "../assets/carousel/item2.png";
import Compartment from "src/components/Compartment";
import { card_product } from "../types/product_type";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import ProductListSkeleton from "src/components/ProductListSkeleton";
import useFetch from "src/api/useFetch";
const carousel_data = [item1, item2];

const fake_products: card_product[] = [
  {
    id: 1,
    image:
      "https://product.hstatic.net/1000273792/product/a0_af7b238cf02643bc89c1044f4215bb14_large.jpg",
    name: "Lorema djalksdjsaljd lajsld jasl dasld   jasl dasld asd  jasl dasld asd  jasl dasld asd  jasl dasld asd  jasl dasld asd  jasl dasld asd  jasl dasld asd  jasl dasld asd  ",
    price: 130000,
    discount: 0,
  },
  {
    id: 2,
    image:
      "https://product.hstatic.net/1000273792/product/7a_7742a2e120d1499a841a943f4f05ff34_large.jpg",
    name: "Lorema djalksdjsaljd lajsld jasl dasld asd ",
    price: 160009000,
    discount: 14000000,
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/1000273792/product/0_22ac740511fd4b28a8baa594093c58fd_large.jpg",
    name: "Lorema djalksdjsaljd lajsld jasl dasld asd ",
    price: 800400,
    discount: 600000,
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/1000273792/product/0_49ea55c5f1f34c088d2f49532d5b36c7_grande.jpg",
    name: "Lorema djalksdjsaljd lajsld jasl dasld asd ",
    price: 800400,
    discount: 600000,
  },
  {
    id: 4,
    image:
      "https://product.hstatic.net/1000273792/product/0_00c29af0db8848d487c8c662cf45d221_grande.jpg",
    name: "asdadasdasda",
    price: 34321,
    discount: 2333,
  },
  {
    id: 5,
    image:
      "https://product.hstatic.net/1000273792/product/2_8681da51d3bb4707821bc1439e0d30ad_grande.jpg",
    name: " 323 2323 232 ",
    price: 1288888,
    discount: 42424,
  },
  {
    id: 6,
    image:
      "https://product.hstatic.net/1000273792/product/m1_40446a5e952c4a9c9b30238ce95317aa_grande.jpg",
    name: " 323 2323 232 ",
    price: 1288888,
    discount: 42424,
  },
];
const Home = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 10; // Tổng số trang
  const response = useFetch("/product/all?page=1");
  console.log(response);
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };
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
      <Compartment data={response} title="Hàng mới về" />
      <Compartment data={response} title="Hàng bán chạy" />
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default Home;
