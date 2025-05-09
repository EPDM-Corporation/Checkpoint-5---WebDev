import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Error from './routes/Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
