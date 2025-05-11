import React from 'react'

const Bicicletas = () => {
  return (
    <section className='h-[1500px] flex justify-center items-start p-[273px]'>
        {/* FORMS PARA O BACKEND */}
        <div className='w-[289px] h-[750px] shadow-xl'>
            <div className='bg-[#F0D250] h-[164px] flex justify-center items-center'>
                <p className='text-[24px] w-[189px]'>Crie ou edite as bicicletas aqui</p>
            </div>
            <form action="" className='flex flex-col items-align p-10 gap-5'>
                <label htmlFor="modelo" className='font-montserrat'>Modelo da bike</label>
                <input type="text" placeholder='Insira o Modelo' className='bg-[#EEEEEE] h-[46px] rounded-[30px]' />
                <label htmlFor="modelo"  className='font-montserrat'>Descrição</label>
                <input type="text" placeholder='Insira a Descrição' className='bg-[#EEEEEE] h-[46px] rounded-[30px]' />
                <label htmlFor="modelo" className='font-montserrat'>Preço</label>
                <input type="text" placeholder='Insira o preço' className='bg-[#EEEEEE] h-[46px] rounded-[30px]' />
                <button className='bg-[#F0D250] h-[50px] font-montserrat text-[20px] rounded-[30px]'>Enviar</button>
            </form>
        </div>
        {/* LISTA DO BACKEND */}
        <div>

        </div>
    </section>
  )
}

export default Bicicletas
