import React from 'react'
import './Home.css'
import Banner from '../components/Banner/Banner'
import SobreImage from '../assets/sobreimage.png'


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        {/* SOBRE */}
        <section className='h-[629px] flex  justify-around items-center'>
            <img src={SobreImage} alt="" className='w-[550px] h-[550px]' />
            <div>
                <h2 className="font-bebas text-[64px]">Sobre o CycloVolt</h2>
                <p className='font-montserrat text-[20px] w-[524px]'>No Cyclovolt promovemos a mobilidade elétrica sustentável com bicicletas
                modernas, ecológicas e de alto desempenho. Nosso foco é facilitar o transporte
                urbano com mais praticidade, saúde e consciência ambiental.
                Acreditamos que pedalar com uma bike elétrica é um passo simples para um futuro
                com menos trânsito e mais qualidade de vida. Venha pedalar com propósito!</p>
            </div>
        </section>

        {/* CARDS */}
        <section className='border-5 h-[632px] bg-[#F3F3F3]'>
            <h1>
                Mais Vendidos
            </h1>
        </section>
    </div>
  )
}

export default Home
