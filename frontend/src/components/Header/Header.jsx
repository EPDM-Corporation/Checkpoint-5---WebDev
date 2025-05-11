import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='border-5 h-[189px]'>
        <div className="menu">
          <img src={logo} id="logo" />
          <div className="botoes">
            <h1 id="home">Home</h1>
            <h1>Bicicletas</h1>
            <h1>Contato</h1>
            <h1>carrinho </h1>
            <h1>homem</h1>
          </div>
        </div>
    </div>
  )
}

export default Header
