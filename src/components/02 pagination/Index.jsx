import { useEffect, useState } from "react";

import { StyledDiv } from "./index.styles";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    let response;

    if (totalPages) {
      response = await fetch(
        `https://dummyjson.com/products?limit=${totalPages}&skip=${
          page * 10 - 10
        }`
      );
    } else {
      response = await fetch(`https://dummyjson.com/products?limit=10`);
    }
    const data = await response.json();
    setProducts(data?.products);
    setTotalPages(data?.total / 10);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== page) {
      setPage(pageNumber);
    }
  };
  return (
    <StyledDiv>
      {products.length && (
        <div className="products_container">
          {products.map((product) => {
            return (
              <div key={product.id} className="products_container__product">
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
              </div>
            );
          })}
        </div>
      )}
      {products.length && (
        <div className="pagination">
          {
            <>
              <span
                className={`pagination--left ${page === 1 ? "disabled" : ""}`}
                onClick={() => handlePageChange(page - 1)}
              >
                ◀️
              </span>
              {[...Array(totalPages)].map((_, index) => {
                return (
                  <span
                    className={`pagination--page_number ${
                      page === index + 1 ? "selected" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </span>
                );
              })}
              <span
                className={`pagination--right ${page === 10 ? "disabled" : ""}`}
                onClick={() => handlePageChange(page + 1)}
              >
                ▶️
              </span>
            </>
          }
        </div>
      )}
    </StyledDiv>
  );
}
