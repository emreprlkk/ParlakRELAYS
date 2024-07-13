import React, { useState } from 'react';

import  Emre2 from './yahak2.jsx'
import Sidebar from './ModernSidebar.jsx';
//import Carousel3D from './Carousel3Demre.js'
import './form.css'




import  { useEffect } from 'react';


 
function App  (){
  useEffect(() => {
    // Arka plan rengini değiştirme kodu
    document.body.style.backgroundColor = '#f5f5f4'; // '#yourColorCode' yerine istediğiniz renk kodunu girin
  }, []); // Boş bir dizi, bu kodun yalnızca bileşen ilk render edildiğinde çalışmasını sağlar


  return (
    <>
 {/*}    */}
 <div >

 <Emre2 />   
 <Sidebar/>

</div >






  
{/*    



   */}




    </>
  );

};


export default App;

