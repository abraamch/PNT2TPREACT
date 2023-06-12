import React, { useState } from 'react';
import WeatherComponent from './WeatherComponent';

const CityFormComponent = () => {
  const [city, setCity] = useState('');
  const [submittedCity, setSubmittedCity] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedCity(submittedCity);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese la ciudad:
          <input type="text" value={submittedCity} onInput={(e) => setSubmittedCity(e.target.value)} />
        </label>
        <button type="submit">Buscar</button>
      </form>
      
      {submittedCity && <WeatherComponent city={submittedCity} />}
    </div>
  );
};

export default CityFormComponent;
