import { useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Carts from "./components/Carts/Carts";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const products = await fetch("products.json");
        const data = await products.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };
    fetchProductsData();
  }, []);

  const handleAddToCartBtn = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      alert("Already added to cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleDeleteBtn = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Cards
            products={products}
            handleAddToCartBtn={handleAddToCartBtn}
          ></Cards>
          <Carts
            cartItems={cartItems}
            handleDeleteBtn={handleDeleteBtn}
          ></Carts>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
