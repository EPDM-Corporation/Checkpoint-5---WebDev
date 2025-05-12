import {useState, useEffect} from 'react'
import './Home.css'
import axios from 'axios'

import Banner from '../components/Banner/Banner'
import SobreImage from '../assets/sobreimage.png'
import Cards from '../components/Cards/Cards'

const Home = () => {
    const API_URL = 'http://localhost:3000/bikes'
    const [bikes, setBikes] = useState([])

    const consultarBikes = async()=>{
        try{
            const response = await axios.get(API_URL);
            setBikes(response.data);
        }catch(error){
            console.log("Erro ao buscar o código", error);
        }
    }


    useEffect(()=>{
        consultarBikes()
    })
  return (
        <div className="overflow-x-hidden">
            <Banner />
            
            {/* SOBRE - Modificado para responsividade */}
            <section className='py-10 md:py-20 lg:h-[629px] flex flex-col lg:flex-row justify-around items-center px-4 lg:px-0'>
                <img 
                    src={SobreImage} 
                    alt="Sobre CycloVolt" 
                    className='w-full max-w-[350px] md:max-w-[450px] lg:w-[550px] h-auto lg:h-[550px] mb-8 lg:mb-0' 
                />
                <div className="text-center lg:text-left">
                    <h2 className="font-bebas text-4xl md:text-5xl lg:text-[64px] mb-4">Sobre o CycloVolt</h2>
                    <p className='font-montserrat text-base md:text-lg lg:text-[20px] w-full max-w-[524px] px-4 lg:px-0'>
                        No Cyclovolt promovemos a mobilidade elétrica sustentável com bicicletas
                        modernas, ecológicas e de alto desempenho. Nosso foco é facilitar o transporte
                        urbano com mais praticidade, saúde e consciência ambiental.
                        Acreditamos que pedalar com uma bike elétrica é um passo simples para um futuro
                        com menos trânsito e mais qualidade de vida. Venha pedalar com propósito!
                    </p>
                </div>
            </section>

            {/* CARDS - Modificado para responsividade */}
            <section className='min-h-[660px] lg:h-[660px] bg-[#F3F3F3] flex flex-col items-center justify-start py-10 lg:py-20 gap-6 lg:gap-10 px-4'>
                <h1 className='w-[200px] md:w-[232px] h-[60px] md:h-[71px] bg-[#F0D250] font-bebas text-2xl md:text-3xl lg:text-[36px] rounded-[10px] flex items-center justify-center'>
                    Mais Vendidos
                </h1>
                
                <div className='w-full flex gap-4 md:gap-10 overflow-x-auto overflow-y-hidden flex-nowrap'>
                    {bikes.length > 0 ? (
                        bikes.map((bike) => (
                            <div key={bike.id} className='h-[600px]'>
                                <Cards title={bike.modelo} description={bike.descricao} price={bike.preco} />
                            </div>
                        ))
                    ) : (<p>Não há nenhuma bicicleta aqui!</p>)}
                </div>
            </section>
        </div>
  );
};

export default Home;

