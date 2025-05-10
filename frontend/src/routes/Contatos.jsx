import React from 'react'
import Image from '../assets/contatos.jpg'

const Contatos = () => {
  return (
    <section className='h-[1400px] p-[225px] flex flex-col  items-center'>
        <h1 className='font-bebas text-[96px]'>Entre em contato conosco</h1>
        <div className='flex justify-center gap-[20px] p-[100px]'>
           <form class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block mb-1 font-montserrat">Primeiro Nome *</label>
                        <input type="text" class="w-full rounded-full bg-gray-200 px-4 py-2 outline-none" required/>
                    </div>
                    <div>
                        <label class="block mb-1 font-montserrat">Sobrenome *</label>
                        <input type="text" class="w-full rounded-full bg-gray-200 px-4 py-2 outline-none" required/>
                    </div>
                    <div>
                        <label class="block mb-1 font-montserrat">Email *</label>
                        <input type="email" class="w-full rounded-full bg-gray-200 px-4 py-2 outline-none" required/>
                    </div>
                    <div>
                        <label class="block mb-1 font-montserrat">Telefone *</label>
                        <input type="tel" class="w-full rounded-full bg-gray-200 px-4 py-2 outline-none" required/>
                    </div>
                </div>
                <div>
                    <label class="block mb-1 font-montserrat">Sua mensagem *</label>
                    <textarea rows="6" class="w-full rounded-[2rem] bg-gray-200 px-4 py-3 outline-none resize-none" required></textarea>
                </div>
                <button type="submit" class="bg-[#F0D250] hover:bg-yellow-500 transition-colors text-black font-montserrat py-2 px-6 rounded-full">
                    Enviar
                </button>
            </form>
            <img src={Image} alt="" className='w-[466px] h-[650px]'/>

        </div>
    </section>
  )
}

export default Contatos
