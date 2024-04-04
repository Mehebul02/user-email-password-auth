import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  FaEyeSlash,FaEye } from 'react-icons/fa';

import auth from '../../firebase_config';
import { useState } from 'react';

const Register = () => {
  const [registerError ,setRegisterError]=useState('')
const [success,setSuccess] =useState('')
const [showPassword,setShowPassword]=useState(false)
    const handleSubmit =(e) =>{
       e.preventDefault()
       const email =e.target.email.value
       const password =e.target.password.value
       const accepted = e.target.terms.checked 
       console.log(email,password,accepted)
       if(password.length <6){
        setRegisterError(' Password should be at least 6 characters or longer')
        return;
       }
       else if(!/[A-Z]/.test(password)){
        setRegisterError('Password Should have at last one uppercase character.')
        return;
       }
       else if(!accepted){
        setRegisterError('Please accept terms and condition')
        return;
       }
      //  reset error 
      setRegisterError('')
      // Success massage 
      setSuccess('')

       createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        console.log(result.user)
        setSuccess('Users Created Successfully')
        
     
       
       })
       .catch(error =>{
        console.log(error)
        setRegisterError('Email already in use')
        
       })

    }
    return (
        <div>
             <div className="lg:w-1/2 mx-auto  gap-6 flex flex-col items-center justify-center 
             min-h-[calc(100vh-160px)] border rounded-xl shadow-lg"> 
           <form onSubmit={handleSubmit}>
           
         <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" name='email' className="grow" placeholder="Email" required/>
</label><br />

<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type={showPassword ? "text":"password"} name='password' className="grow" placeholder='password' />
  <span onClick={()=>setShowPassword(!showPassword)}>
    
     {
      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
     }
    </span>
</label> 
<br />
<input type="checkbox" name='terms' id='terms' />
<label className='ml-4' htmlFor="terms">Accept our terms and condition</label>
<button className='btn  w-full bg-yellow-600 text-xl text-white mt-10 font-bold'>Register</button>
           </form>
           
           {
            registerError && <p className='text-xl text-red-500'>{registerError}</p>
           }
           {
            setSuccess && <p className='text-xl text-green-600'>{success}</p>
           }
           <div>
            
           </div>
        </div>
        </div>
    );
};

export default Register;