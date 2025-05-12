import React from 'react';
import bikeImage from '../../assets/bannerbike.png';

const Banner = () => {
  return (
    <div className="min-h-[400px] md:h-[500px] lg:h-[594px] bg-[#F0D250] flex flex-col lg:flex-row justify-center lg:justify-between">
        {/* Text Content */}
        <div className='flex flex-col justify-center items-center lg:items-start w-full lg:w-[376px] px-6 md:px-10 lg:px-35 gap-3 md:gap-5 py-8 lg:py-0 text-center lg:text-left'>
          <h1 className='font-bebas text-4xl md:text-5xl lg:text-[64px] w-full md:w-[408px]'>
            Liberdade Elétrica Sobre Duas Rodas
          </h1>
          <p className='font-bebas w-full md:w-[441px] text-lg md:text-xl lg:text-[24px]'>
            Autonomia, design e zero emissões. Pedale menos! Curta mais!
          </p>
          <button className='bg-[#FFFFFF] w-[129px] h-[44px] rounded-[30px] font-bebas hover:bg-gray-300 transition-colors mt-4'>
            Saiba Mais
          </button>
        </div>

        {/* Image Container */}
        <div className='max-w-full lg:max-w-[759px] w-full lg:w-[754px] h-auto lg:h-[594px] bg-[#FFF] justify-center items-center rounded-t-[100px] lg:rounded-l-[190px] lg:rounded-tr-none hidden xl:inline p-4'>
          <img 
            src={bikeImage} 
            alt="Bicicleta elétrica" 
            className='w-full max-w-[300px] md:max-w-[400px] lg:w-[546px] h-auto lg:h-[544px] object-contain'
          />
        </div>
    </div>
  );
};

export default Banner;