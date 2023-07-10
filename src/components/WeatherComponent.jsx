import React, { useEffect, useState, useContext } from 'react';
import Ciudad from './Ciudad';
import { WeatherContext } from './context/WeatherContext';

const WeatherComponent = ({ city }) => {

  const { setCity: setCityContext } = useContext(WeatherContext);
  setCityContext(city)
  const { weatherData, error } = useContext(WeatherContext);
 
  if (!weatherData) {
    return <div></div>;
  } 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

 


  return (
    <div>
      <Ciudad city={city} clima={weatherData} error={error} />
    </div>
  );
};

export default WeatherComponent;



 //console.log(weatherData1)
//const { weatherData1 } = useContext(WeatherContext);