import React, { useContext } from "react";
import {ProductContext} from "../context/ProductContext";
import {Hero, Product} from '../constant'
const Home = () => {  
  const  {products}  = useContext(ProductContext);


 const filteredItem =  products.filter((item)=>(
   item.category === "men's clothing" || item.category === "women's clothing"
 ))


  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1.5rem] max-w-sm mx-auto sm:max-w-none">
            {filteredItem.map((item) => (
             <Product product={item} key={item.id}/>
            ))}</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
