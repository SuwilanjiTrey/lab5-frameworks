import React, { useState } from 'react';

function WelcomeMessage({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <WelcomeMessage name="Suwilanji" />
      
      <button 
        onClick={() => setShowMessage(!showMessage)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>

      {showMessage && <p>This is your toggled message! 🎉</p>}
    </div>
  );
}

export default App;
