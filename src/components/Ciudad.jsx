import React from 'react';
import { Link } from 'react-router-dom';

const Ciudad = ({ city, clima, error }) => {
   if (!clima) {
    return <p> </p>;
  }
  else if (error !== null) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  } 
  const { location, current } = clima;
  const { name, country } = location;
  const { temp_c, condition } = current;
  const { text, icon } = condition;

  return (
    <div className='ciudad'>
      <p className=''> {name}, {country} {location.localtime}</p>
      <p> {temp_c} °C</p>
      <div>
        <p>{text}</p>
        <img src={icon} alt="weather" />
      </div>
      <Link to={`/pronostico/${name}`}>Ver pronostico</Link>
    </div>
  );
};

export default Ciudad;
