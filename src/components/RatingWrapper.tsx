import { useState } from "react";
import { MdStarRate } from "react-icons/md";
const RatingWrapper = () => {
  const [current, setCurrent] = useState(3);
  return (
    <div className="flex gap-2 text-[2rem] text-gray-400 items-center">
      {[...Array(5)].map((item, index) => {
        return (
          <MdStarRate
            className={`${index + 1 <= current ? "text-yellow-400" : ""}`}
          />
        );
      })}
      <span className="text-[1rem]">(230 đánh giá)</span>
    </div>
  );
};

export default RatingWrapper;
