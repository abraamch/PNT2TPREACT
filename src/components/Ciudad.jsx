import React from 'react';
import { Link } from 'react-router-dom';

const Ciudad = ({ city, clima, error }) => {
  if (!clima) {
    return <p>Cargando datos de clima...</p>;
  }
  const iconCode = clima.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const { sys, main, weather } = clima;
  const temperature  = main && main.temp



  if (error !== null) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  } else {   
    return (
      <div>
        <h2>El clima en {city}, {sys && sys.country}</h2>
        <h2>Temperatura: {main && main.temp} °C </h2>
        <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center'}}>
         <h2>{weather && weather[0].main}</h2>
         <img src={iconUrl} alt="weather" width={80} />
</div>
       
        <Link to={`/clima/${city}`}>Ver detalles</Link>
      </div>
    );
  }

};

export default Ciudad;


