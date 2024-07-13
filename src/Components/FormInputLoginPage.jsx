import React,{useState} from 'react'
import './FormInputLoginPage.css'
const FormInputLoginPage = ( props) => {

    const{label,errorMessage,onChange,id, ...inputProps}=props;
    const[focused,SetFocued]=useState(false)

    const handleFocus=(e)=>{
        SetFocued(true);

    }

  return (
    <div className='formInput'> 
  
    
   <label>{label}</label>
    <input {...inputProps} onChange={onChange} onBlur={handleFocus}
    onFocus={()=>inputProps.name==="confirmpassword" &&SetFocued(true)}
    focused={focused.toString()}
   />
   <div className='SingErrorMessage'>    <span>{errorMessage} </span> </div>



    </div>
  
  )
}

export default FormInputLoginPage