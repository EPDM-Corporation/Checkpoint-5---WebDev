import React from 'react';
import bikeImage from '../../assets/bannerbike.png';

const Banner = () => {
  return (
    <div className="h-[594px] bg-[#F0D250] flex justify-between">
        <div className='flex flex-col justify-center items-start w-[376px] px-35 gap-5'>
          <h1 className='font-bebas text-[64px] w-[408px]'>Liberdade Elétrica Sobre Duas Rodas</h1>
          <p className='font-bebas w-[441px] text-[24px]'>Autonomia, design e zero emissões. Pedale menos! Curta mais!</p>
          <button className='bg-[#FFFFFF] w-[129px] h-[44px] rounded-[30px] font-bebas hover:bg-gray-300 transition-colors'>Saiba Mais</button>
        </div>

        <div className='max-w-[759px] w-[754px] h-[594px] bg-[#FFF] flex justify-center items-center rounded-l-[190px]'>
          <img src={bikeImage} alt="" className='w-[546px] h-[544px]'/>
        </div>
    </div>
  );
};

export default Banner;
