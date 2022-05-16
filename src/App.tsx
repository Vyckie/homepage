import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyles from './styles/global';
import { Main, Section, Sticky } from './styles';
import Header from './componentes/Header';
import Home from'./pages/Home';
import Cadastro from './pages/Cadastro';
import Footer from './componentes/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        
      </Routes>
     <Footer/>
    </BrowserRouter>
    
     
  );
}

export default App;
