import React, { useContext } from "react";
import { GrFormClose } from "react-icons/gr";
import {IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

import { CartContext } from "../context/CartContext";

const CartItem = (item) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;


  return (
    <div className="flex gap-x-4 border-b">
      <div className="w-full min-h-[150] flex items-center gap-x-4">
        {/* images  */}
        <div className="min-h-[150px] flex items-center">
          <img className="max-w-[80px]" src={image} alt="cart image" />
        </div>

        <div className="w-full flex-col">
          <div className="flex justify-between mb-2">
            {/* title & remove icon  */}
            <div className="text-sm uppercase text-primary font-medium max-w-[250px]">
              {title}
            </div>

            {/* remove icon  */}
            <div className="text-xl" onClick={() => removeFromCart(id)}>
              <GrFormClose className="text-gray-500  hover:text-rose-500 transition-all duration-150 cursor-pointer" />
            </div>
          </div>

          {/* qty */}
          <div className=" flex gap-x-2 h-[36px] text-sm flex-col items-center sm:flex-row">
            <div className="flex items-center h-full flex-1 max-w-[110px] font-semibold">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center h-full cursor-pointer border"
              >
                <IoMdRemove />
              </div>

              <div className="flex justify-center items-center h-full px-2">
                {amount}
              </div>

              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex justify-center items-center h-full cursor-pointer border"
              >
                <IoMdAdd />
              </div>
            </div>

            {/* item price  */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>

            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
