import PropTypes from "prop-types";
import Product from "../Product/Product";
const Cards = ({ products, handleAddToCartBtn }) => {
  return (
    <div className=" col-span-1 md:col-span-2 lg:col-span-2 border border-lime-600 rounded-lg p-5">
      <div>
        {products.map((product, i) => (
          <Product key={i} product={product} handleAddToCartBtn={handleAddToCartBtn}></Product>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  products: PropTypes.array.isRequired,
  handleAddToCartBtn: PropTypes.func.isRequired,
};

export default Cards;
