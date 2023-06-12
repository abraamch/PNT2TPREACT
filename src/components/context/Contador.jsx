import { createContext, useState } from "react";

export const contador= createContext()
const {Provider} = contador
const Contador = ({children}) => {
    const objeto = {
        nombre: ""
    }
  return (
    <Provider value={objeto}>
        {children}
    </Provider>
  )
}

export default Contador