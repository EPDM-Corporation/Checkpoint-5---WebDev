import React from 'react';
import './Home.css';
import Banner from '../components/Banner/Banner';
import SobreImage from '../assets/sobreimage.png';
import Cards from '../components/Cards/Cards';

const Home = () => {
  const scrollToBikes = () => {
    const section = document.getElementById('catalogo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <Banner />
        {/* SOBRE */}
        <section className='h-[629px] flex justify-around items-center'>
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
        <section id="catalogo" className='h-[632px] bg-[#F3F3F3] flex flex-col items-center justify-start'>
            <h1 className='w-[232px] h-[71px] bg-[#F0D250] font-bebas text-[36px] rounded-[10px] flex items-center justify-center'>Mais Vendidos</h1>
            
            <div className='w-[100vw] px-[48px] py-[37px] flex gap-10 overflow-auto'>
                <Cards 
                  title='Caloi E-Vibe City Tour'
                  description='É uma bicicleta elétrica urbana projetada para oferecer conforto e praticidade nos deslocamentos diários'
                  price='R$5.899,99'
                />
            </div>
        </section>
    </div>
  );
};

export default Home;

