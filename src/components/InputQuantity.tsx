
const InputQuantity = ({ value: value = 1 }: { value?: number }) => {
  
  return (
    <div>
      <span>Số lượng: </span>
      <input
        className="outline-none ring-1 ring-gray-400 max-w-[60px] pl-2
  "
        step={1}
        min={1}
        max={40}
        value={value}
        type="number"
        name=""
        id=""
      />{" "}
    </div>
  );
};

export default InputQuantity;
