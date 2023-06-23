import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Pronostico = ({ forecast }) => {
    const {city }= useParams()
  return (
      <div><h3>Pronostico en {city}</h3>
    <div className="weather-app">
    
      <div className="forecast-container">
        {forecast.map(day => (
          <div className="forecast-card" key={day.date}>
            <h2>{day.date}</h2>
            <p>Max: {day.day.maxtemp_c}°C</p>
            <p>Min: {day.day.mintemp_c}°C</p>
            <p> {day.day.condition.text}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
          </div>

        ))}
      </div>
    </div>
  <button><Link to="/">back</Link></button>  
    </div>
  );
};

export default Pronostico;
