import React, { useDeferredValue, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const InputSearch = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-1 max-w-[600px] rounded-lg flex items-center  bg-white shadow-md ">
      <input
        value={search}
        onChange={handleSearch}
        className="outline-none block grow bg-transparent"
        placeholder="Nhập từ khóa"
        type="text"
      />
      <FaSearch className="hover:text-orange-400 text-secondary cursor-pointer size-8 px-2" />
    </div>
  );
};

export default InputSearch;
