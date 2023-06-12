import React, { useEffect, useState, useContext } from 'react';
import Ciudad from './Ciudad';
import { WeatherContext } from './WeatherContext';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'd782ac7b05a47b38afeaac32e2f86ce8';
  const { setWeatherData: setWeatherDataContext } = useContext(WeatherContext);
  const { weatherData1 } = useContext(WeatherContext);

  const ciudad = city;

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setWeatherDataContext(data);
        console.log(weatherData1)
      });
  }, [city, apiKey, setWeatherDataContext]);

  return (
    <div>
      <Ciudad city={ciudad} clima={weatherData} />
    </div>
  );
};

export default WeatherComponent;
