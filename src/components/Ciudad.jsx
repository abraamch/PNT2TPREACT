import React from 'react';
import { Link } from 'react-router-dom';

const Ciudad = ({ city, clima, error }) => {
  if (error !== null) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  } else if (!clima) {
    return <p>Cargando datos de clima...</p>;
  }

  const { location, current } = clima;
  const { name, country } = location;
  const { temp_c, condition } = current;
  const { text, icon } = condition;

  return (
    <div className=''>
      <h4>Temperatura en {name}, {country} {location.localtime}</h4>
      <h2> {temp_c} °C</h2>
      <div>
        <h2>{text}</h2>
        <img src={icon} alt="weather" />
      </div>
      <Link to={`/pronostico/${name}`}>Ver detalles</Link>
    </div>
  );
};

export default Ciudad;
