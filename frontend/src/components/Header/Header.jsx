import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className='h-[100px] md:h-[150px] lg:h-[189px] flex justify-between items-center p-2 md:p-5 relative'>
        <Link to="/">
            <img 
                src={Logo} 
                alt="Logo CycloVolt" 
                className='w-[100px] h-auto md:w-[150px] lg:w-[176px] lg:h-[121px] m-2 md:m-5' 
            />
        </Link>
        
        {/* Menu para desktop */}
        <div className='hidden md:flex items-center gap-5 lg:gap-10 max-w-[882px] m-2 md:m-5'>
          <Link to="/" className='font-montserrat text-lg lg:text-[26px] text-[#8C8C15] underline-animation'>Home</Link>
          <Link to="/bicicletas" className='font-montserrat text-lg lg:text-[26px] underline-animation-other'>Bicicletas</Link>
          <Link to="/contatos" className='font-montserrat text-lg lg:text-[26px] underline-animation-other'>Contatos</Link>
          <FontAwesomeIcon icon={faCartShopping} size='xl' className="lg:size-[2x] xl:size-[3x]"/>
          <FontAwesomeIcon icon={faUser} size='xl' className="lg:size-[2x] xl:size-[3x]"/>
        </div>
        
        {/* Menu hamburguer para mobile */}
        <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        
        {/* Menu mobile expandido */}
        {menuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4 flex flex-col items-center gap-4">
                <Link to="/" className='font-montserrat text-xl text-[#8C8C15]' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/bicicletas" className='font-montserrat text-xl' onClick={() => setMenuOpen(false)}>Bicicletas</Link>
                <Link to="/contatos" className='font-montserrat text-xl' onClick={() => setMenuOpen(false)}>Contatos</Link>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                    <FontAwesomeIcon icon={faUser} size="xl" />
                </div>
            </div>
        )}
    </div>
  )
}

export default Header