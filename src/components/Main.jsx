import React from 'react'

import WeatherComponent from './WeatherComponent'
import CityFormComponent from './CityFormComponent'
import { useContext } from 'react'
import { contador } from './context/Contador'


const Main = () => {
  
  
  return (
    <div>
      
  <CityFormComponent/>
    </div>
  )
}

export default Main