import React from 'react'
import CardImage from '../../assets/calloi.png'

const Cards = ({title,description,price}) => {
  return (
    <div className='w-[359px] h-[450px] bg-gradient-to-l from-[#F0D250] to-[#F29E30] rounded-[30px]'>
        <img src={CardImage} alt="" />
        <div className='h-[222px] bg-[#FFFFFF] rounded-[30px] flex flex-col p-[24px]'>
          <h2 className='font-bebas text-[24px]'>{title}</h2>
          <p className='font-montserrat w-[300px] h-[72px] overflow-auto'>{description}</p>
          <div className='h-[51px] flex justify-between items-end'>
            <h2 className='font-bebas text-[24px]'>R$ {price}</h2>
            <button className='w-[129px] h-[33px] bg-[#F0D250] rounded-[30px]'>Comprar</button>
          </div>
        </div>
    </div>
  )
}

export default Cards
