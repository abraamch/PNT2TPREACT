import React from 'react';
import { Link } from 'react-router-dom';

const Ciudad = ({ city, clima, error }) => {
  if (!clima) {
    return <p>Cargando datos de clima...</p>;
  }

  const { sys, main, weather } = clima;
  const temperature  = main && main.temp
  let imageSrc = ''
  if (temperature <= 10) {
    imageSrc = 'https://play-lh.googleusercontent.com/yJ2J5RJhIyr4KS8sl2waCKwiuO0TIUS7mwcnBrK98OuRpV2FO5T511cBUYrtwi7BVP0';
  } else if (temperature <= 20) {
    imageSrc = 'https://lh3.googleusercontent.com/1NWSffUULql2uPj0hT_WTwSTfmUv0yuXk0Rq0Q6tpcUZbMurPESyK8W2NBqpa8SRpA=w300';
  } else {
    imageSrc = 'https://cdn-icons-png.flaticon.com/512/6393/6393305.png';
  }

  if (error !== null) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  } else {   
    return (
      <div>
        <h2>Condiciones climáticas en {city}, {sys && sys.country}</h2>
        <h2>Temperatura: {main && main.temp} °C </h2>
        <h2>Descripcion: {weather && weather[0].description} </h2>
        <img src={imageSrc} alt="weather" width={100}/>
        <Link to={`/clima/${city}`}>Ver detalles</Link>
      </div>
    );
  }

};

export default Ciudad;




   
///<p>Descripción: {clima.weather[0].description}</p>
       

//<p>Humedad: {clima.main.humidity}%</p>

 //<p> Mín de hoy: {clima.main.temp_min}</p>
 //<p> Máx de hoy: {clima.main.temp_max}</p>
