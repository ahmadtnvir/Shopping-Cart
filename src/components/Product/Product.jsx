import PropTypes from "prop-types";

const Product = ({ product, handleAddToCartBtn }) => {
//   console.log(product);
  return (
    <div className="flex flex-col items-center justify-between mb-6">
      <img
        className="w-1/2 object-fill rounded-xl"
        src={product.image}
        alt={product.name}
      />
      <div className="mt-5 mb-4 space-y-3">
        <h3 className="font-bold text-2xl text-gray-700">{product.title}</h3>
        <p className="text-lg text-gray-500">{product.description}</p>
      </div>
      <div className="w-full space-y-3">
        <p className="font-bold text-xl text-gray-700">
          Price: ${product.price}
        </p>
        <button
          onClick={() => {
            handleAddToCartBtn(product);
          }}
          className=" bg-lime-300 py-3 px-5 rounded-xl text-xl font-bold text-green-900"
        >
          Add to Cart
        </button>
        <hr />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  handleAddToCartBtn: PropTypes.func.isRequired,
};

export default Product;
