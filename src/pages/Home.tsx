import { Carousel, Image } from "antd";
import item1 from "../assets/carousel/item1.png";
import item2 from "../assets/carousel/item2.png";
import Compartment from "src/components/Compartment";
import { card_product } from "../types/product_type";
import useFetch from "src/api/useFetch";
import {
  dataTagSymbol,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
const carousel_data = [item1, item2];
import { fetch_data } from "src/api/ProductApi";
const Home = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 10; // Tổng số trang
  // const response = useFetch("/product/all?page=1");
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch_data.getProductPerpage("/product/all?page=1"),
    staleTime: 30000,
    gcTime: 50000,
  });
  // const andlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };
  return (
    <div>
      <div className="max-w-[1000px] mx-auto shadow-md">
        <Carousel className="" arrows autoplay infinite>
          {carousel_data.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  style={{
                    objectFit: "fill",
                    height: "100%",
                    margin: 0,
                    display: "block",
                  }}
                  wrapperClassName="w-full md:h-[400px] block "
                  src={item}
                  preview={false}
                  alt="caurousel-image"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <Compartment isLoading={isLoading} data={data} title="Hàng mới về" />
      <Compartment isLoading={isLoading} data={data} title="Hàng bán chạy" />
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default Home;
