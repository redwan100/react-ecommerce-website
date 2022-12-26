import { useContext } from 'react'
import {SidebarContexts} from '../context/SidebarContext'
import {TbArrowNarrowRight} from 'react-icons/tb'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import {BiTrashAlt} from 'react-icons/bi'


const Sidebar = () => {
  const {isOpen, handleSidebar} = useContext(SidebarContexts)
  const {cart, cartClear,total} = useContext(CartContext)

  
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full h-full bg-white fixed top-0 z-50 shadow-2xl md:w-[40vw] xl:max-w-[35vw] px-4 lg:px-[35px] transition-all duration-300 flex flex-col overflow-y-scroll`}
      >
        <div className="flex justify-between items-center border-b py-2">
          <p className="uppercase text-sm font-semibold">
            Shopping Bag ({cart.length ? cart.length : "0"})
          </p>
          <p className="cursor-pointer flex" onClick={() => handleSidebar()}>
            <TbArrowNarrowRight />
          </p>
        </div>

        <div className="">
          {cart.map((item) => (
            <div key={item.id}>
              <CartItem {...item} />
            </div>
          ))}
        </div>

        <div className="py-4 mt-3 content-end">
          <div className="w-full pl-2 flex justify-between items-center">
            {/*  total  */}
            <div>
              <span>Total:</span> $ {total}
            </div>

            {/* clear cart icon  */}
            <div
              onClick={cartClear}
              className="mb-5 cursor-pointer bg-red-500 rounded shadow-md shadow-rose-300 w-10 h-10 grid place-items-center text-white text-xl"
            >
              <BiTrashAlt />
            </div>
          </div>
          <button className="w-full bg-gray-200 p-2 font-semibold rounded">
            View cart
          </button>
          <button className="w-full bg-slate-800 text-white mt-3 p-2 font-semibold rounded">
            Checkout cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar