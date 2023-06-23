import React, { useState } from 'react';

const Modo = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    padding: '20px',
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`} style={containerStyle}>
     
     
      <button onClick={toggleDarkMode}>Cambiar a Modo Oscuro</button>
    </div>
  );
};

export default Modo;
