import PropTypes from "prop-types";

const Cart = ({ cart, handleDeleteBtn, i }) => {
  //   console.log(cart);
  const { title, price } = cart;
  return (
    <div className="grid grid-cols-5 text-start my-4 bg-green-50 p-4 rounded-xl">
      <span className="flex justify-center items-center text-xl font-bold">
        {i + 1}
      </span>
      <h3 className="text-xl font-bold text-gray-700 col-span-2">{title}</h3>
      <p className="text-lg font-bold text-gray-700 flex justify-center items-center">
        ${price}
      </p>
      {/* Add delete button */}
      <button
        onClick={() => handleDeleteBtn(cart)}
        className="text-sm font-bold text-red-500 hover:text-red-600 text-center"
      >
        Delete
      </button>
    </div>
  );
};

Cart.propTypes = {};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};
export default Cart;
