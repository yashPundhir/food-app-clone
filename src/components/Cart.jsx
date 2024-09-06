import React from 'react'
import bg1 from "../assets/bg1.jpeg";

const Cart = () => {
  return (
    <section className="cart bg-gradient-to-b from-[#e6d8d8] to-[#e0a59b]">
      <h1 className='text-[40px] font-[700] text-center pb-[30px]'>Your Cart</h1>
      
      <div className='flex flex-col items-center gap-[20px]'>
        <div className="flex flex-row gap-[40px] px-[20px] py-[20px] rounded-lg bg-gradient-to-br from-[#e0a59b] to-[#ffffff] cursor-pointer hover:shadow-[0px_0px_30px_10px_#ef4444] transition ease-in-out duration-300">
          <img src={bg1} alt="" className='w-[250px] rounded-lg'/>
          <div className='flex flex-col text-[20px] font-[700] justify-center'>
            <p>Butter Chicken</p>
            <p className='text-[15px]'>Rs. 240</p>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] px-[20px] py-[20px]
        bg-gradient-to-br from-[#e0a59b] to-[#ffffff] cursor-pointer rounded-lg hover:shadow-[0px_0px_30px_10px_#ef4444] transition ease-in-out duration-300">
          <img src={bg1} alt="" className='w-[250px] rounded-lg'/>
          <div className='flex flex-col text-[20px] font-[700] justify-center'>
            <p>Butter Chicken</p>
            <p className='text-[15px]'>Rs. 240</p>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] px-[20px] py-[20px]  bg-gradient-to-br from-[#e0a59b] to-[#ffffff] cursor-pointer rounded-lg hover:shadow-[0px_0px_30px_10px_#ef4444] transition ease-in-out duration-300">
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