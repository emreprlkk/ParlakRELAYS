import React from 'react';
import './sim.css';
import  { useState } from 'react';

function ModernCircles({ onInputChange, Result_Relay1 }) {
  const relayLabels = ['röle1', 'röle2', 'röle3', 'röle4', 'röle5'];


  const [inputValues, setInputValues] = useState(Array(relayLabels.length).fill(''));
  const handleInputChange = (e, index) => {
    const value = parseInt(e.target.value, 10);
// Girilen değeri ve ilgili indeksi kullanarak diğer tüm inputları sil
const newInputValues = inputValues.map((_, idx) => (idx === index ? value : ''));
setInputValues(newInputValues);

    onInputChange(index, value);
  };
  return (
    <div className='Anadiv_sim'>
      
       <div className="circle-container">
    {relayLabels.map((label, i) => (
      <div key={i} className="circle-wrapper">
        <div className={`circle circle-${i}`}>
          {label}
        </div>
        {i < 5 && (
          <>
        
            <div className="line-wrapper">
         
              <input
                type="number"
                value={inputValues[i]}
                placeholder='KısaDevre'
                className="form-number-input"
                
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="line"></div>
              <div> 
                <div   className="Relay_Result">  
                {` ${Result_Relay1[i]} `}
                   </div>
            
                
                 </div>
    
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
