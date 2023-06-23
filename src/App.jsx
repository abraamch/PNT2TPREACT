import { useState } from 'react'
import WeatherComponent from './components/WeatherComponent'
import { WeatherProvider } from './components/WeatherContext' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Contador from './components/context/Contador'
import { Outlet } from 'react-router-dom'
import Modo from './components/Modo'

function App() {
  

  return (
    
    <WeatherProvider> 


       <Outlet/>  
      <Header/>
  
   
      </WeatherProvider> 
      
  )
}

export default App
