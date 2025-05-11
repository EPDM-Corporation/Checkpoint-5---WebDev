import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Error from './routes/Error';
import Contatos from './routes/Contatos';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Importando o Font Awesome localmente
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;