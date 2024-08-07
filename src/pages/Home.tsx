import { Carousel } from "antd";
import item1 from "../assets/carousel/item1.png";
import item2 from "../assets/carousel/item2.png";
import Compartment from "../components/Compartment";
import { card_product } from "../types/product_type";
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
    price: 160000,
    discount: 140000,
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/1000273792/product/0_22ac740511fd4b28a8baa594093c58fd_large.jpg",
    name: "Lorema djalksdjsaljd lajsld jasl dasld asd ",
    price: 800400,
    discount: 600000,
  },
];
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

      <Compartment title="Hàng mới về" data={fake_products} />
      <Compartment title="Hàng bán chạy" data={fake_products} />
    </div>
  );
};

export default Home;
