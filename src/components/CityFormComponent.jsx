import React, { useState } from 'react';
import WeatherComponent from './WeatherComponent';

const Form = () => {
  const [city, setCity] = useState('');
  const [submittedCity, setSubmittedCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
    setCity('');
  };
  const handleMiCiudad = (e) => {
    e.preventDefault();
    setSubmittedCity('Buenos Aires');
    setCity('');
  };

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit}>
    <label className="form-label">
      <h3>Ciudad:</h3> 
      <input
      placeholder='ingresa la ciudad'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control"
      />
    </label>
    <button className="btn btn-primary" type="submit">Buscar</button>
    </form>

    <form onSubmit={handleMiCiudad}><button className="btn btn-primary" type="submit">Mi ciudad</button></form>
  
  <WeatherComponent city={submittedCity} />
</div>

  );
}

export default Form;
