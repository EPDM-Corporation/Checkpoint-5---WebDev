import React from 'react'

const Bicicletas = () => {

  return (
    <section className='h-[1500px] flex justify-center items-start p-[273px] gap-[150px]'>
        {/* FORMS PARA O BACKEND */}
        <div className='w-[289px] h-[750px] shadow-xl'>
            <div className='bg-[#F0D250] h-[164px] flex justify-center items-center'>
                <p className='text-[24px] w-[189px]'>Crie ou edite as bicicletas aqui</p>
            </div>
            <form action="" className='flex flex-col items-align p-10 gap-5'>
                <label htmlFor="modelo" className='font-montserrat'>Modelo da bike</label>
                <input type="text" placeholder='Insira o Modelo' className='bg-[#EEEEEE] h-[46px] rounded-[30px] placeholder:p-2' />
                <label htmlFor="modelo"  className='font-montserrat'>Descrição</label>
                <input type="text" placeholder='Insira a Descrição' className='bg-[#EEEEEE] h-[46px] rounded-[30px] placeholder:p-2' />
                <label htmlFor="modelo" className='font-montserrat'>Preço</label>
                <input type="text" placeholder='Insira o preço' className='bg-[#EEEEEE] h-[46px] rounded-[30px] placeholder:p-2' />
                <button className='bg-[#F0D250] h-[50px] font-montserrat text-[20px] rounded-[30px] hover:bg-yellow-500 transition-colors'>Enviar</button>
            </form>
        </div>
        {/* LISTA DO BACKEND */}
        <div className='w-[831px] h-[750px] shadow-xl overflow-auto'>
            <div className='bg-[#F0D250] h-[153px] flex justify-center items-center'>
                <p className='text-[40px]'>Lista de Bicicletas</p>
            </div>
            {/* AQUI QUE VEM OS BAGULHOS DO BACKEND */}
            <div className='h-[93px] border-[#B7B7B7] border-1 flex justify-around items-center'>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'> Caloi E-Vibe City Tour</p>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'>É uma bicicleta elétrica urbana projetada para oferecer conforto e praticidade nos deslocamentos diários</p>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'>5999.99</p>
                <button className='bg-[#F0D250] w-[108px] h-[45px] rounded-[30px] hover:bg-yellow-500 transition-colors ' >Editar</button>
                <button className='bg-[#F07D7D] w-[108px] h-[45px] rounded-[30px] hover:bg-red-500 transition-colors text-white' >Excluir</button>
            </div>
        </div>
    </section>
  )
}

export default Bicicletas
