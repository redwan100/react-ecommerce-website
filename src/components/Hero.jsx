import React from 'react'
import { Link } from 'react-router-dom';
import womenImg from '../assets/pictures/woman_hero.png'
const Hero = () => {
  return (
    <section className="h-[800px] bg-rose-200/60 py-24">
      <div className="container mx-auto h-full flex justify-around">
        {/* text  */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-rose-500"></div>
            New Trend
          </div>

          {/* title  */}
          <h1 className="text-[75px] leading-[1.1] font-light">
            Autumn SALE STYLISH <br />
            <span className="font-semibold mb-4">WOMENS</span>
          </h1>

          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary">Discover More</Link>
        </div>

        {/* image  */}
        <div className="hidden lg:block">
          <img src={womenImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero