import {useState, useEffect} from 'react'
import axios from 'axios'


const Bicicletas = () => {

    const API_URL = 'http://localhost:3000/bikes'

    const [bikes, setBikes] = useState([])
    const [novoBike, setNovoBike] = useState({modelo:'',descricao:'',preco:''})
    const [editar, setEditar] = useState(false)


    const cadastrarBikes = async()=>{
        if (!novoBike.modelo || !novoBike.descricao ){
            alert("Campo Obrigatório.")
            return
        }
        try{
            const response = await axios.post(API_URL,novoBike);
            setBikes([...bikes,response.data]);
            setNovoBike({modelo:'',descricao:'',preco:''})
            setEditar(false)
        }
        catch(error){
            console.log("Erro ao criar Bike", error);
        }
    }

    const consultarBikes = async()=>{
        try{
            const response = await axios.get(API_URL);
            setBikes(response.data);
        }catch(error){
            console.log("Erro ao buscar o código", error);
        }
    }

    const alterarBike = async()=>{
        if(!novoBike.modelo ||!novoBike.descricao || !novoBike.preco){
            alert("Campo Obrigatório.")
            return
        }
        try{
            const response = await axios.put(`${API_URL}/${novoBike.id}`, novoBike);
            setBikes(bikes.map(bike => bike.id === novoBike.id ? response.data :bike))
            setNovoBike({modelo:'',descricao:'',preco:''})
            setEditar(false)
        }
        catch(error){
            console.log("Erro ao atualizar o produto", error)
        }
    }
    
    const deletarBike = async(id)=>{
        if(window.confirm("Tem certeza que quer deletar a bike?")){
            try{
                await axios.delete(`${API_URL}/${id}`)
                setBikes(bikes.filter((bike) => bike.id !== id));
            } catch(error){
                console.log("Erro ao excluir um produto", error)
            }
        }else{
            console.log("Exclusão do item cancelada.")
        }
    }

    const handleEditar = (bike)=>{
        setNovoBike(bike);
        setEditar(true)
    }

    const handleSubmit = () =>{
        if(editar){
            alterarBike();
        }else{
            cadastrarBikes();
        }
    }

    useEffect(()=>{
        consultarBikes()
    })

  return (
    <section className='h-[1500px] flex justify-center items-start p-[273px] gap-[150px]'>
        {/* FORMS PARA O BACKEND */}
        <div className='w-[289px] h-[750px] shadow-xl'>
            <div className='bg-[#F0D250] h-[164px] flex justify-center items-center'>
                <p className='text-[24px] w-[189px]'>Crie ou edite as bicicletas aqui</p>
            </div>

            <form action="" className='flex flex-col items-align p-10 gap-5' onSubmit={(e)=>{ e.preventDefault();}}>
                <label htmlFor="modelo" className='font-montserrat'>Modelo da bike</label>
                <input
                type="text"
                placeholder='Insira o Modelo'
                className='bg-[#EEEEEE] h-[46px] rounded-[30px] placeholder:p-2'
                id='modelo'
                value={novoBike.modelo}
                onChange={(e) => setNovoBike({...novoBike, modelo:e.target.value})}
                />
                <label htmlFor="modelo"  className='font-montserrat'>Descrição</label>
                <input
                type="text"
                placeholder='Insira a Descrição' 
                className='bg-[#EEEEEE] h-[46px] rounded-[30px] placeholder:p-2' 
                id='descricao'
                value={novoBike.descricao}
                onChange={(e)=> setNovoBike({...novoBike, descricao:e.target.value})}
                />
                <label htmlFor="modelo" className='font-montserrat'>Preço</label>
                <input
                type="text" 
                placeholder='Insira o preço' 
                className='bg-[#EEEEEE] h-[46px] rounded-[30px] placeholder:p-2' 
                id='preco'
                value={novoBike.preco}
                onChange={(e)=> setNovoBike({...novoBike, preco:e.target.value})}
                />
                <button className='bg-[#F0D250] h-[50px] font-montserrat text-[20px] rounded-[30px] hover:bg-yellow-500 transition-colors' onClick={handleSubmit}>{editar ? "Alterar":"Cadastrar"}</button>
            </form>
            
        </div>
        {/* LISTA DO BACKEND */}
        <div className='w-[831px] h-[750px] shadow-xl overflow-auto'>
            <div className='bg-[#F0D250] h-[153px] flex justify-center items-center'>
                <p className='text-[40px]'>Lista de Bicicletas</p>
            </div>
            {/* AQUI QUE VEM OS BAGULHOS DO BACKEND */}
            {/* <div className='h-[93px] border-[#B7B7B7] border-1 flex justify-around items-center'>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'> Caloi E-Vibe City Tour</p>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'>É uma bicicleta elétrica urbana projetada para oferecer conforto e praticidade nos deslocamentos diários</p>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'>5999.99</p>
                <button className='bg-[#F0D250] w-[108px] h-[45px] rounded-[30px] hover:bg-yellow-500 transition-colors ' >Editar</button>
                <button className='bg-[#F07D7D] w-[108px] h-[45px] rounded-[30px] hover:bg-red-500 transition-colors text-white' >Excluir</button>
            </div> */}
            {bikes.map(bike => (
            <div className='h-[93px] border-[#B7B7B7] border-1 flex justify-around items-center' key={bike.id}>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'> {bike.modelo}</p>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'>{bike.descricao}</p>
                <p className='overflow-auto w-[174px] h-[59px] font-montserrat'>{bike.preco}</p>
                <button className='bg-[#F0D250] w-[108px] h-[45px] rounded-[30px] hover:bg-yellow-500 transition-colors ' onClick={() => handleEditar(bike)} >Editar</button>
                <button className='bg-[#F07D7D] w-[108px] h-[45px] rounded-[30px] hover:bg-red-500 transition-colors text-white' onClick={() => deletarBike(bike.id)} >Excluir</button>
            </div>
            ))}
        </div>
    </section>
  )
}
export default Bicicletas
