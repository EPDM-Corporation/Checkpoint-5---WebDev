import React from 'react'
import Logo from '../../assets/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className=' h-[189px] flex justify-between items-center p-5'>
        <img src={Logo} alt="" className='w-[176px] h-[121px] m-5' />
        <div className='flex items-center gap-10 max-w-[882px]'>
          <p className='font-montserrat text-[26px]'>Home</p>
          <p className='font-montserrat text-[26px]'>Bicicletas</p>
          <p className='font-montserrat text-[26px]'>Sobre</p>
          <p className='font-montserrat text-[26px]'>Contatos</p>
          <FontAwesomeIcon icon={faCartShopping}  size='3x'/>
          <FontAwesomeIcon icon={faUser}  size='3x'/>
        </div>
    </div>
  )
}

export default Header
