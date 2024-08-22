import PropTypes from "prop-types";
import { useEffect, useState } from "react";
type props = {
  currentPage: number;
  totalPages: number;
  onPageChange: Function;
};
const Pagination = ({ currentPage, totalPages, onPageChange }: props) => {
  const pages: any[] = [];
  const ellipsis = "...";
  const [maxPagesToShow, setMaxPagesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMaxPagesToShow(3); // Hiển thị tối đa 3 trang trên điện thoại
      } else {
        setMaxPagesToShow(5); // Hiển thị tối đa 5 trang trên các thiết bị lớn hơn
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Đảm bảo kích thước được cập nhật ngay lập tức

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const generatePageNumbers = () => {
    if (totalPages <= maxPagesToShow) {
      return pages;
    }

    const pageNumbers = [];
    const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
    console.log(startPage, endPage);
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push(ellipsis);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push(ellipsis);
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      {generatePageNumbers().map((page, index) =>
        page === ellipsis ? (
          <span key={index} className="ellipsis">
            {ellipsis}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => {
              console.log(page);
              onPageChange(page);
            }}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
