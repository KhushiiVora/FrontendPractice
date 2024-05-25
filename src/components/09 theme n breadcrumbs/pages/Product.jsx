import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

const Product = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div className="product_details_container">
      <BreadCrumbs />
      <div className="product_details_container__detail">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product_details_container__detail--description">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>$ {product.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
