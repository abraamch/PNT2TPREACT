import React, { useEffect, useState , useContext} from 'react';

import { useParams } from 'react-router-dom';
import { WeatherContext } from './WeatherContext';
import { Link } from 'react-router-dom';
const CityDetails = () => {
  
  const {city}= useParams()
  const { weatherData1 } = useContext(WeatherContext);
  console.log(weatherData1)
 

  const { sys, main , weather} = weatherData1;

  return (
    <div>
      <h2>Condiciones climáticas en {city}, {sys && sys.country}</h2>
      <h2>Temperatura: {main && main.temp} °C </h2>
      <p>Descripción: {weatherData1.weather[0].description}</p>
      <p>Humedad: {main.humidity}%</p>
      <p> Mín de hoy: {main.temp_min} °C</p>
      <p> Máx de hoy: {main.temp_max} °C</p>

      <Link to={`/`}>Volver</Link>
    </div>
  );
};



export default CityDetails;
