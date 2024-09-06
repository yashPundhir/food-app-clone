import React from 'react'
import bg1 from "../assets/bg1.jpeg";
import bg3 from "../assets/bg-3.jpeg";
import bg4 from "../assets/bg4.jpeg";

const Cart = () => {
  return (
    <section className="cart">
      <h1 className='text-[40px] font-[700] text-center pb-[30px]  bg-gradient-to-b from-[#e6d8d8] to-[#e0a59b]'>Your Cart</h1>
      
      <div className='flex flex-col items-center gap-[20px]'>
        <div className="flex flex-row gap-[40px] px-[10px] py-[10px] border-[1.5px] rounded-lg">
          <img src={bg1} alt="" className='w-[250px] rounded-lg'/>
          <div className='flex flex-col text-[20px] font-[700] justify-center'>
            <p>Butter Chicken</p>
            <p className='text-[15px]'>Rs. 240</p>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] px-[10px] py-[10px]">
          <img src={bg1} alt="" className='w-[250px] rounded-lg'/>
          <div className='flex flex-col text-[20px] font-[700] justify-center'>
            <p>Butter Chicken</p>
            <p className='text-[15px]'>Rs. 240</p>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] px-[10px] py-[10px]">
          <img src={bg1} alt="" className='w-[250px] rounded-lg'/>
          <div className='flex flex-col text-[20px] font-[700] justify-center'>
            <p>Butter Chicken</p>
            <p className='text-[15px]'>Rs. 240</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart