import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pronostico from './Pronostico';
import { ForecastContext } from './context/ForecastContext';

const PronosticoContainer = () => {
  const { city } = useParams();
 
  const { forecastData, error, setCity } = useContext(ForecastContext);

  setCity(city); 
  
  if (!forecastData) {
    return <div>Cargando...</div>;
  }


  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <Pronostico forecastData={forecastData} />
    </div>
  );
};

export default PronosticoContainer;
