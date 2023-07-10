import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { WeatherContext } from './context/WeatherContext';

const Pronostico = ({ forecastData }) => {
    const {city }= useParams()
    console.log(forecastData)

    const {weatherData} = useContext(WeatherContext)
    console.log(weatherData)
    const { current } = weatherData;
    const {temp_c} = current
    if (!forecastData) {
      return <div>Cargando pronóstico...</div>;
    }
  return (
    <div>
    <h3>Pronóstico en {city}</h3>
    <div className="weather-app">
      <p>Pronóstico actual {temp_c} °C</p>
      <div className="forecast-container">
        {forecastData.map((day) => (
          <div className="forecast-card" key={day.date}>
            <h2>{day.date}</h2>
            <p>Max: {day.day.maxtemp_c}°C</p>
            <p>Min: {day.day.mintemp_c}°C</p>
            <p>{day.day.condition.text}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
          </div>
        ))}
      </div>
    </div>
    <button>
      <Link to="/">Volver</Link>
    </button>
  </div>
  );
};

export default Pronostico;
