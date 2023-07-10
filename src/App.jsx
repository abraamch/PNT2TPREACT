import { ForecastProvider } from './components/context/ForecastContext'

import { WeatherProvider } from './components/context/WeatherContext' 

import './App.css'

import Header from './components/Header'

import { Outlet } from 'react-router-dom'



function App() {
  

  return (
   
    <WeatherProvider> 
 <ForecastProvider>  

      <Outlet/>  
      <Header/>
  
      </ForecastProvider>
      </WeatherProvider> 
    
  )
}

export default App
