import React from 'react'
import Titulo from './Titulo'
import { Link } from 'react-router-dom'
import Modo from './Modo'
const Nav = () => {
  return (
    
    <nav>  
        <Titulo nombre = 'mi app del clima'/> 
            <Link to={'/'}> Home </Link>
           <a href='/'> Carrito </a>
           <a href='/'>   Contacto</a>
           
    </nav>
  )
}

export default Nav