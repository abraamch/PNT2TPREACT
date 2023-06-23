import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pronostico from './Pronostico';

const PronosticoContainer = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = 'ff9ca7f5e75c4880a5924433232106'; 
  const { city } = useParams();

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&lang=es`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La ciudad ingresada no existe');
        }
        return response.json();
      })
      .then((data) => {
        setForecast(data.forecast.forecastday);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }, [apiKey, city]);

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <Pronostico forecast={forecast} />
    </div>
  );
}; export default PronosticoContainer
