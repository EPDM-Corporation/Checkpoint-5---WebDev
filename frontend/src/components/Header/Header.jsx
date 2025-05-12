import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className=' h-[189px] flex justify-between items-center p-5'>
        <Link to="/"><img src={Logo} alt="" className='w-[176px] h-[121px] m-5' /></Link>
        <div className='flex items-center gap-10 max-w-[882px] m-5'>
          <Link to="/" className='font-montserrat text-[26px] text-[#8C8C15] underline-animation'>Home</Link>
          <Link to="/bicicletas"className='font-montserrat text-[26px] underline-animation-other'>Bicicletas</Link>
          <Link to="/contatos" className='font-montserrat text-[26px] underline-animation-other'>Contatos</Link>
          <FontAwesomeIcon icon={faCartShopping}  size='3x'/>
          <FontAwesomeIcon icon={faUser}  size='3x'/>
        </div>
    </div>
  )
}

export default Header
