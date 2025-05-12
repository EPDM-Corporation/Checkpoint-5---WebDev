import React from 'react'
import Image from '../assets/contatos.jpg'

const Contatos = () => {
  return (
    <section className='min-h-screen py-12 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[225px] flex flex-col items-center'>
        <h1 className='font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-[96px] text-center mb-8 md:mb-16'>
          Entre em contato conosco
        </h1>
        
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 p-4 sm:p-8 md:p-12 lg:p-[100px]'>
          <form className="w-full max-w-2xl space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block mb-2 font-montserrat text-sm md:text-base">Primeiro Nome *</label>
                <input 
                  type="text" 
                  className="w-full rounded-[10px] bg-gray-200 px-4 py-2 md:py-3 outline-none focus:ring-2 focus:ring-[#F0D250]" 
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-montserrat text-sm md:text-base">Sobrenome *</label>
                <input 
                  type="text" 
                  className="w-full rounded-[10px] bg-gray-200 px-4 py-2 md:py-3 outline-none focus:ring-2 focus:ring-[#F0D250]" 
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-montserrat text-sm md:text-base">Email *</label>
                <input 
                  type="email" 
                  className="w-full rounded-[10px] bg-gray-200 px-4 py-2 md:py-3 outline-none focus:ring-2 focus:ring-[#F0D250]" 
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-montserrat text-sm md:text-base">Telefone *</label>
                <input 
                  type="tel" 
                  className="w-full rounded-[10px] bg-gray-200 px-4 py-2 md:py-3 outline-none focus:ring-2 focus:ring-[#F0D250]" 
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-montserrat text-sm md:text-base">Sua mensagem *</label>
              <textarea 
                rows="6" 
                className="w-full rounded-[10px] bg-gray-200 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#F0D250]" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-[#F0D250] hover:bg-yellow-500 transition-colors text-black font-montserrat py-2 px-6 rounded-full text-sm md:text-base"
            >
              Enviar
            </button>
          </form>
          
          {/* Imagem - só aparece em telas maiores */}
          <div className='hidden lg:block w-full max-w-[466px]'>
            <img 
              src={Image} 
              alt="Pessoas em contato" 
              className='w-full h-auto max-h-[650px] object-cover rounded-lg shadow-xl'
            />
          </div>
        </div>
    </section>
  )
}

export default Contatos