import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
const Carts = ({ cartItems, handleDeleteBtn }) => {
  return (
    <div className="border border-lime-600 rounded-lg p-5 bg-lime-200 h-fit">
      <h1 className="text-3xl text-lime-800 font-semibold">Shopping Cart</h1>
      <div>
        {cartItems.map((item, i) => (
          <Cart key={i} i = {i} cart={item} handleDeleteBtn={handleDeleteBtn}></Cart>
        ))}
      </div>
    </div>
  );
};

Carts.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired,
};

export default Carts;
