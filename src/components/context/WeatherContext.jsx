import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'c50160beb95c4782ab9225107230907';
  const [city, setCity ]  = useState("")

  useEffect(() => {
   
    const fetchWeather = async (city) => {

      if (city) {  
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`);
        if (!response.ok) {
          throw new Error('La ciudad ingresada no existe');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } 
    }
    };

    
    fetchWeather(city);
  }, [apiKey, city]);

  return (
    <WeatherContext.Provider value={{ weatherData, error, city, setCity}}>
      {children}
    </WeatherContext.Provider>
  );
};
