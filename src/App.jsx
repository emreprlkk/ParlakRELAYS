import React, { useState } from 'react';

import {
  BrowserRouter as Router,

  Route,

  BrowserRouter,
  Routes
} from "react-router-dom";
import  Emre2 from './yahak2.jsx'
//import Sidebar from './ModernSidebar.jsx';
//import Carousel3D from './Carousel3Demre.js'
import './form.css'
import Singup from './Components/Singupx.jsx';
import Blogx from './Components/Blogx.jsx'
import BlogRelay from './BlogRelay.jsx'

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
     <Route path="/Blog"element={ <BlogRelay/>  } />
 
    </Routes>
      
    </BrowserRouter>




    </>
  );

};


export default App;

