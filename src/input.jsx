import React, { useState } from 'react';
import App from './App';

const İnput = (props) => {
  const [message, setMessage] = useState('');

  const handleChange=(event)=> {
    const girilendeger=parseInt(event.target.value)
setMessage(girilendeger);
console.log(" değer : "+girilendeger);

};

 
  
  return (

    <div className='input-css'>
    <input 
    type="number" id="message" name="messagename" onChange={handleChange} value={message}  placeholder="Bir sayi girin"  />
     <h2>Mesaj : {message*10/5}</h2>
     
    </div>
   
   
  );
};


export default İnput;