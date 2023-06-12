import React from 'react'
import Titulo from './Titulo'
const Nav = () => {
  return (
    
    <nav>  
        <Titulo nombre = 'mi app del clima'/> 
            <a href='/'>Home     </a>
           <a href='/carrito'> Carrito </a>
           <a href='/contacto'>   Contacto</a>
    </nav>
  )
}

export default Nav