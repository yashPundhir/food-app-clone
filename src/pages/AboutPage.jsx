// pages/AboutPage.js
import React from 'react';
import chef from "../assets/chef.png"

const AboutPage = () => (
  <section id="about" className="py-16 bg-gradient-to-b from-[#e6d8d8] to-[#e0a59b]">
    <h1 className="text-[40px] font-[700] text-center pb-[30px]">About Us</h1>
    <div className='flex flex-row justify-center items-center gap-[70px]'>
      <div className=''>
        <img src={chef} alt="" className='w-[450px]'/>
      </div>
      <div className='rounded-xl w-[500px] text-[20px] px-[20px] py-[20px] bg-gradient-to-br from-[#e0a59b] to-[#ffffff] font-[600] shadow-[0px_0px_50px_20px_#ef4444]'>
        At DelishBites, we believe that food is more than just a necessity – it's an experience.Our mission is to bring you a wide variety of mouth-watering dishes from the best local restaurants, all delivered right to your door with just a few clicks.<br/>
        <br/>
        Whether you're craving the rich flavors of North Indian cuisine, the fiery spices of Chinese dishes, or the comfort of home-cooked South Indian meals, we've got something to satisfy every palate.<br/>
        <br/>
        We’re committed to making your food delivery experience as seamless and delightful as possible. 
      </div>
    </div>
  </section>
);

export default AboutPage;
