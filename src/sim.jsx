import React from 'react';
import './sim.css';

function ModernCircles({ onInputChange }) {
  const relayLabels = ['röle1', 'röle2', 'röle3', 'röle4', 'röle5'];
  
  const handleInputChange = (e, index) => {
    const value = parseInt(e.target.value, 10);
    console.log(`Input ${index + 1} changed: ${value}`);
    onInputChange(index, value);
  };
  return (
    <div className='Anadiv'>
       <div className="circle-container">
    {relayLabels.map((label, i) => (
      <div key={i} className="circle-wrapper">
        <div className={`circle circle-${i}`}>
          {label}
        </div>
        {i < 4 && (
          <>
        
            <div className="line-wrapper">
         
              <input
                type="number"
                placeholder='KısaDevreAkımı'
                className="form-number-input"
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="line"></div>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
  </div>
    
  );
}

export default ModernCircles;
