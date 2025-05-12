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
<section className='min-h-screen w-full p-4 sm:p-8 md:p-12 lg:px-16 xl:px-20 py-10 flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12 xl:gap-[150px]'>
  {/* FORMULÁRIO */}
  <div className='w-full lg:w-[350px] xl:w-[400px] shadow-xl rounded-lg overflow-hidden'>
    <div className='bg-[#F0D250] h-[120px] sm:h-[140px] md:h-[164px] flex justify-center items-center'>
      <p className='text-lg sm:text-xl md:text-2xl w-full px-4 text-center'>
        Crie ou edite as bicicletas aqui
      </p>
    </div>

    <form className='flex flex-col p-4 sm:p-6 md:p-8 gap-3 sm:gap-4 md:gap-5' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="modelo" className='font-montserrat text-sm sm:text-base'>Modelo da bike</label>
      <input
        type="text"
        placeholder='Insira o Modelo'
        className='bg-[#EEEEEE] h-[40px] sm:h-[46px] rounded-[10px] px-3 sm:px-4 placeholder:text-sm'
        id='modelo'
        value={novoBike.modelo}
        onChange={(e) => setNovoBike({...novoBike, modelo:e.target.value})}
      />
      
      <label htmlFor="descricao" className='font-montserrat text-sm sm:text-base'>Descrição</label>
      <textarea
        placeholder='Insira a Descrição'
        className='bg-[#EEEEEE] h-[80px] rounded-[10px] px-3 sm:px-4 py-2 placeholder:text-sm resize-none'
        id='descricao'
        value={novoBike.descricao}
        onChange={(e) => setNovoBike({...novoBike, descricao:e.target.value})}
      />
      
      <label htmlFor="preco" className='font-montserrat text-sm sm:text-base'>Preço</label>
      <input
        type="number"
        placeholder='Insira o preço'
        className='bg-[#EEEEEE] h-[40px] sm:h-[46px] rounded-[10px] px-3 sm:px-4 placeholder:text-sm'
        id='preco'
        value={novoBike.preco}
        onChange={(e) => setNovoBike({...novoBike, preco:e.target.value})}
      />
      
      <button 
        className='bg-[#F0D250] h-[45px] sm:h-[50px] font-montserrat text-base sm:text-lg md:text-xl rounded-[30px] hover:bg-yellow-500 transition-colors mt-2'
        onClick={handleSubmit}
      >
        {editar ? "Alterar" : "Cadastrar"}
      </button>
    </form>
  </div>

  {/* LISTA DE BICICLETAS */}
  <div className='w-full lg:w-[600px] xl:w-[700px] 2xl:w-[831px] shadow-xl rounded-lg overflow-hidden'>
    <div className='bg-[#F0D250] h-[100px] sm:h-[120px] md:h-[140px] flex justify-center items-center'>
      <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center px-4'>
        Lista de Bicicletas
      </p>
    </div>
    
    <div className='max-h-[500px] overflow-y-auto'>
      {bikes.length > 0 ? (
        bikes.map(bike => (
          <div 
            key={bike.id}
            className='h-auto min-h-[80px] sm:min-h-[93px] border-b border-[#B7B7B7] flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-2 sm:gap-0'
          >
            <p className='w-full sm:w-[25%] font-montserrat text-sm sm:text-base text-center sm:text-left truncate' title={bike.modelo}>
              {bike.modelo}
            </p>
            <p className='w-full sm:w-[25%] font-montserrat text-sm sm:text-base text-center line-clamp-2' title={bike.descricao}>
              {bike.descricao}
            </p>
            <p className='w-full sm:w-[15%] font-montserrat text-sm sm:text-base text-center'>
              R$ {Number(bike.preco).toFixed(2)}
            </p>
            <div className='w-full sm:w-[35%] flex justify-center gap-2 sm:gap-4'>
              <button 
                className='bg-[#F0D250] w-full sm:w-[100px] h-[35px] sm:h-[40px] rounded-[10px] hover:bg-yellow-500 transition-colors text-sm sm:text-base'
                onClick={() => handleEditar(bike)}
              >
                Editar
              </button>
              <button 
                className='bg-[#F07D7D] w-full sm:w-[100px] h-[35px] sm:h-[40px] rounded-[10px] hover:bg-red-500 transition-colors text-white text-sm sm:text-base'
                onClick={() => deletarBike(bike.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className='h-[100px] flex justify-center items-center'>
          <p className='font-montserrat text-gray-500'>Nenhuma bicicleta cadastrada</p>
        </div>
      )}
    </div>
  </div>
</section>
  )
}
export default Bicicletas
