import { useEffect, useState } from "react";
import { SpinnerIcon } from "../icons/SpinnerIcon";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductsGrid from "../components/ProductsGrid";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    setProducts(data.products);
    data.products.length && setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <SpinnerIcon /> Loading...
        </div>
      ) : (
        <div className="products_container">
          <BreadCrumbs />
          <ProductsGrid
            className="products_container__grid"
            products={products}
          />
        </div>
      )}
    </>
  );
};

export default Products;
