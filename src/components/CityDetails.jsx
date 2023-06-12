import React, { useEffect, useState , useContext} from 'react';

import { useParams } from 'react-router-dom';
import { WeatherContext } from './WeatherContext';
import { Link } from 'react-router-dom';
const CityDetails = () => {

  const {city}= useParams()
  const { weatherData1 } = useContext(WeatherContext);
  console.log(weatherData1)
 

  const { sys, main } = weatherData1;

  return (
    <div>
      <h2>Condiciones climáticas en {city}, {sys && sys.country}</h2>
      <h2>Temperatura: {main && main.temp} °C </h2>
      <Link to={`/`}>Volver</Link>
    </div>
  );
};



export default CityDetails;
