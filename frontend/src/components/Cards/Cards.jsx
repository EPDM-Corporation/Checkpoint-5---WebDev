import React from 'react'
import CardImage from '../../assets/calloi.png'

const Cards = ({title,description,price}) => {
  return (
<div className='relative w-[300px] h-[380px] bg-gradient-to-l from-[#F0D250] to-[#F29E30] rounded-[25px] overflow-hidden'>
  {/* Imagem na parte superior */}
  <div className='h-[210px] overflow-hidden'>
    <img 
      src={CardImage} 
      alt={title} 
      className='w-full h-full object-cover'
    />
  </div>
  
  {/* Conteúdo fixo na base */}
  <div className='absolute bottom-0 w-full h-[170px] bg-white rounded-t-[15px] flex flex-col p-5'>
    <div className='flex-grow flex flex-col'>
      <h2 className='font-bebas text-[20px] mb-1'>{title}</h2>
      <p className='font-montserrat text-sm h-[60px] overflow-auto mb-2'>
        {description}
      </p>
    </div>
    
    <div className='flex justify-between items-end mt-auto'>
      <h2 className='font-bebas text-[20px]'>R$ {price}</h2>
      <button className='w-[110px] h-[30px] bg-[#F0D250] hover:bg-yellow-500 transition-colors rounded-[25px] text-sm'>
        Comprar
      </button>
    </div>
  </div>
</div>

  )
}

export default Cards
