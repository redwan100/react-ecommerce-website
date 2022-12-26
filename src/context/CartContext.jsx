import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price 
  const [total, setTotal] = useState(0)
  // cart state
  const [cart, setCart] = useState([]);
  // add to cart function
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //  remove to cart function
  const removeFromCart = (id) => {
    const newItem = cart.filter((item) => item.id !== id);
    setCart(newItem);
  };

  // clear cart function
  const cartClear = () => {
    setCart([]);
  };

  // increase amount function
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  // decrease amount function
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newItem);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };


  // update amount 
 useEffect(()=>{
  if(cart){
    const amount = cart.reduce((acc,cur)=>{
      return acc + cur.amount
    },0)
    setItemAmount(amount)
  }
 },[cart])
 
//  total 
 useEffect(()=>{
  const amount = cart.reduce((acc, cur)=>{
    return acc + cur.price * cur.amount;
  },0)
  setTotal(amount)
 })


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartClear,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
