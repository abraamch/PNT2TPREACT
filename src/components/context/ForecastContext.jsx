import React, { createContext, useState, useEffect } from 'react';

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'c50160beb95c4782ab9225107230907';
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&lang=es`);
          if (!response.ok) {
            throw new Error('La ciudad ingresada no existe');
          }
          const data = await response.json();
          setForecastData(data.forecast.forecastday);
          setError(null);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  return (
    <ForecastContext.Provider value={{ forecastData, error, city, setCity }}>
      {children}
    </ForecastContext.Provider>
  );
};
