import { useState } from "react";
import ProductList from "./ProductList";
import CartModal from "./CartModal";
import Header from "./Header";
import myBanner from "./assets/myBanner.gif";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const updateTotal = (cart) => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }

    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="fixed top-0 w-full z-50">
        <Header
          cartCount={cart.length}
          openCartModal={() => setIsCartOpen(true)}
        />
      </div>
      <div className="max-w-screen overflow-hidden">
        <img
          src={myBanner}
          className="w-full h-fit object-cover"
          alt="Banner"
        />
      </div>

      <ProductList addToCart={addToCart} cart={cart} />
      {isCartOpen && (
        <>
          <CartModal
            cart={cart}
            removeFromCart={removeFromCart}
            closeModal={() => setIsCartOpen(false)}
            total={total}
          />
        </>
      )}
    </div>
  );
}

export default App;
