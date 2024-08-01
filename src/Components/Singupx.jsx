
import React, { useState } from 'react';
import './Singupx.css';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth  } from '../Firebase';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import FormInput from './FormInputLoginPage.jsx'




const Singup = () => {
 

  const[values,setValues]=useState({
    Username:"",
    email:"",
    birthday:"",
    password:"",
    confirmpassword:""

  } )
  const inputs=[
    {
    id:1,
    name:"Fullname",
    type:"text",
    placeholder:"İsim Soyisim",
    errorMessage:"",
    label:"İsim Soyisim",
    required:true
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"email",
    errorMessage:"Geçerli Bir Mail Adresi Giriniz!",
    label:"Mail Adresiniz",
    required:true
  },

  {
    id:3,
    name:"password",
    type:"password",
    placeholder:"password",
    errorMessage:"",
    label:"Şİfreniz",
 
    required:true
  },
  {
    id:4,
    name:"confirmpassword",
    type:"password",
    placeholder:"confirm password",
    errorMessage:"ŞİFRELER EŞLEŞMİYOR",
    label:"Parolanızı tekrarlayın",
    pattern:values.password,
    required:true
  }
]
const inputs2=[

{
  id:1,
  name:"email",
  type:"email",
  placeholder:"email",
  errorMessage:"Geçerli Bir Mail Adresi Giriniz!",
  label:"Mail Adresiniz",
  required:true
},
{
  id:2,
  name:"password",
  type:"password",
  placeholder:"password",
  errorMessage:"",
  label:"Şİfreniz",
  required:true
}

]
  const onChange=(e)=>{
  //  console.log(e.target.value)
    setValues({...values,[e.target.name]:e.target.value});
  
  }
  const handleSubmit=(e)=> {
    e.preventDefault();
   

  }
  const [isSignUp, setIsSignUp] = useState(true);

  const authFonc= async()=>{
    if(isSignUp){
          if(values.password===values.confirmpassword){

            try {
              //register
        const data=await createUserWithEmailAndPassword(auth, values.email, values.password)
        const user = data.user;
 
        if(user){
          toast.error("Kayıt Başarılı, Hoşgeldiniz!")
        
          window.location="/ConfigAndSim"
        }
   
        } catch (error) {
     
          toast.error(error.message);
          
        }
          }

        }
        else{
          try {
            ///login
          const data=await signInWithEmailAndPassword(auth, values.email, values.password)
          const user = data.user;
        
          if(user){
            toast.success("Hoşgeldiniz :)") // görüntülenmyior buraya bir bak
            window.location="/ConfigAndSim"
          }
            
          } catch (error) {
            
            toast.error(error.message);
          }
          
    
        }
    
   
  }
 



  return (
    <div className='App_LoginPage' >
    
  <form className='form' onSubmit={handleSubmit} > 

 
  
  <h1></h1>
  
  
  {isSignUp ? 
        inputs.map(input => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange} 
          />
         
        )) : 
        inputs2.map(input => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange} 
          />
        ))
      }
{/*
 {inputs.map(
  (input)=>(
  <FormInput  key={input.id} {...input} values={values[input.name]} onChange={onChange}/> 

 ))}*/}

  <div className='formgecisi' onClick={()=> setIsSignUp(!isSignUp) }   > 
  {isSignUp ?  "Hesabınız Var Mı?Giriş Yapın" : "Hesabınız Yok Mu?Kayıt olun"}  </div> 
<button className='buttonSingupSingın' onClick={authFonc}>{isSignUp ? 'Kayıt Ol' : 'Giriş Yap'} </button>
  </form>
  <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
       
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

</div >
  )
}

export default Singup

