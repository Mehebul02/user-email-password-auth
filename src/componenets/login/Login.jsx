import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase_config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [loginError,setLoginError] =useState('')
  const [loginSuccess,setLoginSuccess] =useState('')
  const handleLogin=(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
    // reset email 
    setLoginError('')
    // add email 
    signInWithEmailAndPassword(auth,email,password)
    .then(result =>{
      const logged =result.user
      console.log(logged)
      setLoginSuccess('Successfully email login')
    })
    .catch(error =>{
      console.log(error)
      setLoginError('Wrong Password')
    })

  }
    return (
    <div>
       <div className="flex justify-center items-center  min-h-[calc(90vh-130px)] space-y-14">
      <form onSubmit={handleLogin}>
      <input  type="text" name="email" placeholder="Email" className="input  w-full input-bordered input-secondary  max-w-xs" /><br /><br />
      <input type="password" name="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" /><br /><br />
      <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
      <input className="btn w-full bg-yellow-600 text-xl font-bold text-white " type="submit" value='Login' name="" id="" />
      </form>
     </div>
   <div className="text-center">
   {
        loginError && <p className="text-red-600">{loginError}</p>
      }
      {
        loginSuccess && <p className="text-xl text-green-700">{loginSuccess}</p>
      }
        <p >New to this website? Please <Link to='/register'>Register</Link></p>
   </div>
    </div>
    );
};

export default Login;