import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData1, setWeatherData] = useState("");

  return (
    <WeatherContext.Provider value={{ weatherData1, setWeatherData }}>
    
      {children}
    </WeatherContext.Provider>
  );
};
