import React, { useEffect, useState, useContext } from 'react';
import Ciudad from './Ciudad';
import { WeatherContext } from './WeatherContext';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'ff9ca7f5e75c4880a5924433232106';
  const { setWeatherData: setWeatherDataContext } = useContext(WeatherContext);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La ciudad ingresada no existe');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setWeatherDataContext(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }, [city]);

  return (
    <div>
      <Ciudad city={city} clima={weatherData} error={error} />
    </div>
  );
};

export default WeatherComponent;



 //console.log(weatherData1)
//const { weatherData1 } = useContext(WeatherContext);