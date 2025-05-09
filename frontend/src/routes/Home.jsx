import React from 'react'
import './Home.css'
import Banner from '../components/Banner/Banner'
import SobreImage from '../assets/sobreimage.png'


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        {/* SOBRE */}
        <div className='border-5 h-[629px]'>
            <img src={SobreImage} alt="" />
            <div>
                <h2>Sobre o CycloVolt</h2>
                <p>No Cyclovolt promovemos a mobilidade elétrica sustentável com bicicletas
                modernas, ecológicas e de alto desempenho. Nosso foco é facilitar o transporte
                urbano com mais praticidade, saúde e consciência ambiental.
                Acreditamos que pedalar com uma bike elétrica é um passo simples para um futuro
                com menos trânsito e mais qualidade de vida. Venha pedalar com propósito!</p>
            </div>
        </div>

        {/* CARDS */}
        <div className='border-5 h-[632px]'>

        </div>
    </div>
  )
}

export default Home
