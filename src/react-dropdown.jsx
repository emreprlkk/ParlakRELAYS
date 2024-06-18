
import Select from 'react-select'
import React,{useState} from "react";

const options=[
    {value:"NI",label:"Nominal Inverse"},
    {value:"VI",label:"Very Inverse"},
    {value:"EI",label:"Extremely Inverse"},
    {value:"LTSI",label:"Long Time Standard Inverse"}
]
function Dropdown  ()  {
   const[pp,setPp]=useState('değer yok')

   const handleChange = (selectedOption) => {
    setPp(selectedOption);
    if (selectedOption) {
      console.log(`Seçilen Öğe: ${selectedOption.value}`);
    }
   
  };
    
    return (
       
    
    <div style={{width:10}}>  <Select options={options} onChange={handleChange} /> 
    
     </div>
      
      );
  }
  
export default Dropdown;


