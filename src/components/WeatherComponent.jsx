import React, { useEffect, useState, useContext } from 'react';
import Ciudad from './Ciudad';
import { WeatherContext } from './WeatherContext';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'd782ac7b05a47b38afeaac32e2f86ce8';
  const { setWeatherData: setWeatherDataContext } = useContext(WeatherContext);

 

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La ciudad ingresada no existe');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setWeatherDataContext(data);
        setError(null)
      })
      .catch((error) => {
        setError(error);
      });
  }, [city, apiKey, setWeatherDataContext]);

   
    return (
      <div>
        <Ciudad city={city} clima={weatherData} error={error}/>
      </div>
    );
  }


export default WeatherComponent;


 //console.log(weatherData1)
//const { weatherData1 } = useContext(WeatherContext);