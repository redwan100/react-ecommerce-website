import { useContext } from "react";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";







const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const {addToCart} = useContext(CartContext);


  return (
    <div className="shadow-md rounded shadow-slate-400">
      <div className=" border border-gray-200 h-[300px] relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image  */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 duration-200"
            />
          </div>
        </div>
        <div>
          {/* button  */}
          <div
            className=" absolute top-6 -right-12 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0
          group-hover:opacity-100 duration-200 group-hover:right-0"
          >
            <button onClick={() => addToCart(product,id)}>
              <div className="w-8 h-8 text-white bg-gray-500 flex justify-center items-center shadow-md rounded">
                <AiOutlinePlus className="text-2xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-8 h-8 bg-white flex justify-center items-center rounded shadow-md"
            >
              <AiOutlineEye className="text-2xl rounded" />
            </Link>
          </div>
        </div>
      </div>

      {/* category title $ price  */}
      <div className="bg-slate-100 rounded py-1 px-2">
        <div className="text-sm my-1 capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold leading-[18px] md:leading-5 text-sm sm:text-md ">
            {title}
          </h2>
        </Link>
        <p className="mt-2 font-semibold text-gray-600">${price}</p>
      </div>
    </div>
  );
};

export default Product;
                                                  