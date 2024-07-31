import React, { useState } from 'react';

import {
  BrowserRouter as Router,

  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import  Emre2 from './yahak2.jsx'
//import Sidebar from './ModernSidebar.jsx';
//import Carousel3D from './Carousel3Demre.js'
import './form.css'
import Singup from './Components/Singupx.jsx';
import Blogx from './Components/Blogx.jsx'


import  { useEffect } from 'react';


 
function App  (){



//console.log(values)
  return (
<>
 {/*}   <div><Emre2 />   
 <Sidebar/>
 </div>
*/}

<BrowserRouter>
<Routes> 
  

     
     <Route path="/"element={ <Singup/> } />
     <Route path="/ConfigAndSim"element={ <Emre2/>  } />
     <Route path="/DevAbout"element={ <Blogx/>  } />
 
 



 {/*
   A <Switch> looks through all its children <Route>
   elements and renders the first one whose path
   matches the current URL. Use a <Switch> any time
   you have multiple routes, but you want only one
   of them to render at a time
 */}


  
  
  
  
    </Routes>
      
    </BrowserRouter>




    </>
  );

};


export default App;

