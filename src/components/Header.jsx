import { useContext, useEffect, useState } from "react";
import { SidebarContexts } from "../context/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import logo from "../assets/pictures/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // cartContext 
  const { itemAmount } = useContext(CartContext);

  // sidebar context 
  const { isOpen, setIsOpen } = useContext(SidebarContexts);

//  scroll handle 
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  },[])


  return (
    <div
      className={`w-full  shadow-md bg-white/60 py-3  backdrop-blur-sm z-50 transition-all duration-500 ${
        isActive ? "fixed top-0 left-0 " : ""
      }`}
    >
      <div className=" flex justify-between container mx-auto">
        <Link to="/">
          <div>
            <img src={logo} alt="" className="w-[30px]" />
          </div>
        </Link>
        <div className="relative" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineShoppingCart className="text-3xl cursor-pointer" />

          <div className="absolute top-0 -right-2 bg-rose-500 text-white w-[18px] h-[18px] grid place-items-center rounded-full text-xs font-bold">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
