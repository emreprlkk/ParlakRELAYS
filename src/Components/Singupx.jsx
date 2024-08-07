
import React, { useState } from 'react';
import './Singupx.css';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth  } from '../Firebase';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { db } from '../Firebase.jsx';
import { collection, addDoc } from 'firebase/firestore';


import FormInput from './FormInputLoginPage.jsx'

const Singup = () => {
 

  const[values,setValues]=useState({
    isim_Soyisim:"",
    şirket:"",
    email:"",
    password:"",
    confirmpassword:""

  } )
  const inputs=[
    {
    id:1,
    name:"isim_Soyisim",
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
    placeholder:"Mail Adresini Giriniz",
    errorMessage:"Geçerli Bir Mail Adresi Giriniz!",
    label:"Mail Adresiniz",
    required:true
  },
  {
    id:3,
    name:"şirket",
    type:"text",
    placeholder:"Görev Aldığınız Şirket Adı",
    errorMessage:"Şirket / Okul Adı Boş Bırakılamaz.",
    label:"Şirket Adı",
    required:true
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Şifre Belirleyin",
    errorMessage:"",
    label:"Şİfreniz",
    required:true
  },
  {
    id:5,
    name:"confirmpassword",
    type:"password",
    placeholder:"Şifenizi tekrar girin",
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
          if(values.password===values.confirmpassword && values.şirket!=''){

         try {
              //register
        const data=await createUserWithEmailAndPassword(auth, values.email, values.password)
        const user = data.user;
        const docRef = await addDoc(collection(db, "users"), {
          isimSoyisim: values.isim_Soyisim,
          sirket: values.şirket,
          mail:values.email
        });
        //console.log("Document written with ID: ", docRef.id);
  
        if(user){
          toast.error("Kayıt Başarılı, Hoşgeldiniz!")

          window.location="/ConfigAndSim"
        }
   
        } 
        catch (error) {
          toast.error(error.message);
          console.error("Error adding document: ", error.message);
          
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
  
   
    
    <h1> PARLAK RELAYS </h1>
    
    
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
  
  
    <div className='formgecisi' onClick={()=> setIsSignUp(!isSignUp) }   > 
    {isSignUp ?  "Hesabınız Var Mı?Giriş Yapın" : "Hesabınız Yok Mu?Kayıt olun"} 
     </div> 
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

