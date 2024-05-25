import { useLocation, useNavigate } from "react-router-dom";

const ProductsGrid = (props) => {
  const { products, className } = props;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={className}>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="products_container__grid--item"
            onClick={() =>
              navigate(`${location.pathname}/${product.id}`, {
                state: { product },
              })
            }
          >
            <img src={product.images[0]} alt={product.title} />
            <p>{product.title}</p>
            <span>$ {product.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
