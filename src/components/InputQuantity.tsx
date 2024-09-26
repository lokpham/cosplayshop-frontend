const InputQuantity = ({
  quantity: quantity = 1,
  setQuantity,
  stock,
}: {
  quantity?: number;
  setQuantity: Function;
  stock: number;
}) => {
  return (
    <div>
      <span>Số lượng: </span>
      <input
        className="outline-none ring-1 ring-gray-400 max-w-[60px] pl-2
  "
        onChange={(e) => {
          setQuantity(parseInt(e.target.value));
        }}
        step={1}
        min={1}
        max={stock}
        value={quantity}
        type="number"
        name=""
        id=""
      />{" "}
    </div>
  );
};

export default InputQuantity;
