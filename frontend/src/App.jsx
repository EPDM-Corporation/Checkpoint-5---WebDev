import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Error from './routes/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
    <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
