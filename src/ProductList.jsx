import { useEffect, useState } from "react";

const ProductList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-container flex flex-wrap w-full mx-auto font-serif gap-10  justify-center mb-5">
      {isLoading ? (
        <h1 className="text-xl text-left mt-5">Loading products...</h1>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className=" shadow-md hover:shadow-xl w-1/4 flex flex-col items-center justify-between p-3 mt-5
            transform transition duration-200 hover:scale-105 "
          >
            <img
              src={product.image}
              alt={product.title}
              width="100"
              className="block mx-auto w-40 aspect-square object-fill mt-3"
            />

            <div className="flex flex-col h-full w-full mt-auto">
              <h2 className="mt-5 hover:text-orange-400">{product.title}</h2>

              <p className="font-bold font-sans text-xl">${product.price}</p>
              <div className="flex justify-end mt-auto">
                <button
                  className="mt-auto self-end w-1/3 h-10 hover:text-orange-400 text-white bg-cyan-950 rounded-lg
                  cursor-pointer items-end disabled:bg-gray-300  disabled:cursor-not-allowed disabled:text-white"
                  disabled={cart.some((item) => item.id === product.id)}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
