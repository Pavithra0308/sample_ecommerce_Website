import emptyCart from "./assets/emptyCart.webp";
import { IoMdCloseCircle } from "react-icons/io";

const CartModal = ({ cart, removeFromCart, closeModal, total }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-slate-50 flex justify-center items-center">
      <div className="bg-gray-200 p-5 w-1/2 rounded-lg shadow-lg">
        {cart.length === 0 ? (
          <div>
            <div className="flex justify-end items-center mb-4">
              <button onClick={closeModal}>
                <IoMdCloseCircle className="text-red-700 text-3xl cursor-pointer" />
              </button>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl">
                Your Cart is <span className="text-red-600">Empty!</span>
              </p>
              <img
                src={emptyCart}
                alt="Empty Cart"
                className="w-1/2 mx-auto mt-5"
              />
              <p className="font-serif mt-5 w-2/3 mx-auto text-gray-800">
                Looks like you have not added anything to your cart. Go ahead &
                explore more products.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 overflow-y-auto max-h-96">
            <div className="flex justify-between sticky top-0 bg-gray-200">
              <h2 className="font-extrabold text-xl">
                Shopping Cart ({cart.length})
              </h2>
              <div className="flex justify-end items-center mb-4">
                <button onClick={closeModal}>
                  <IoMdCloseCircle className="text-red-700 text-3xl cursor-pointer" />
                </button>
              </div>
            </div>

            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-white p-2 rounded-lg shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-cover "
                />
                <h3 className="font-serif mx-3 w-1/3 text-center">{product.title}</h3>
                <p className="font-extrabold text-lg">${product.price}</p>

                <button
                  className="bg-red-600 text-white w-18 h-8 rounded-lg cursor-pointer "
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="sticky bottom-0 bg-gray-200 py-3 px-4 flex justify-between items-center border-t  mt-5">
              <h1 className="text-xl font-semibold font-serif">Total:</h1>
              <p className="text-xl font-bold text-green-600">${total}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
