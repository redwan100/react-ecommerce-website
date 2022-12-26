import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  console.log(typeof id);
  // single product base on id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg-py-32  flex items-center overflow-auto h-4/6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* image  */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={image}
              alt="image"
              className="max-w-[220px] lg:max-w-sm"
            />
          </div>
          {/* text  */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2  mx-auto">
              {title}
            </h1>
            <div className="text-xl font-medium text-red-500 mb-6">
              ${price}
            </div>
            <p className="pb-8 max-w-[550px]">{description} </p>
            <button
              className="bg-primary text-gray-100 py-2 px-4 text-xs"
              onClick={() => addToCart(product, id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
