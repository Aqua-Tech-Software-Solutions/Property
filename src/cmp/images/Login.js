import React, {useState} from 'react'
import './NewLogin.css'
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';   
// import {a} from 'react-router-dom'


import axios from 'axios';


function Login() {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const login = async (e) => {
         e.preventDefault();

        
        console.log("entered Sign UP");
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
      
        const obj = {
            "email": email,
            "password": password,
        }
        
        const newResponse = await userAction(obj);
        console.log("newResponse", newResponse);
      if(newResponse){
        if(newResponse.status===201){
        
          toast("Login Successfull")
        //   window.location.href = '/sidebar';
         
      
        }
        else{
          console.log("recieved error");
          toast("Error! INVALID CREDENTIALS")
        } 
    }
    else{
        console.log("recieved error");
        toast("Error! INVALID CREDENTIALS")
        // window.location.href = '/sidebar';
      }
        
        //window.location.href = '/';
         
      }

    
      
      
        const userAction = async (obj) => {
        try {
          console.log('obj',obj);
          const response = await  axios.post( "https://app-propertymanagement.herokuapp.com/auth/login", obj);
            console.log("response body", response);
            console.log("response body", response.data.access_token);
            localStorage.setItem("JWTtoken", response.data.access_token);
             return response;
      
        }catch (error) {
            toast(error);
        //   toast(error);
            console.log("catch in fetch", error);
        };
        setEmail("")
        setPassword("")
      
  }


  return (
  <>
    <div className="fixed-background"></div>
    <main>
    <div className="container">
        <div className="h-100 row">
            <div className="mx-auto my-auto col-12 col-md-10">
                <div className="auth-card card">
                    <div className="position-relative image-side">
                        <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                        <p className="white mb-0">
                            please use your credentials to login. <br />
                            if you are not a member, please <a href="#" className="white">register</a>
                            .
                        </p>
                    </div>
                    <div className="form-side">
                        <a href="#" aria-current="page" className="white active">
                            <span className="logo-single"></span>
                        </a>
                        <div className="mb-4 card-title">Login</div>
                        <form action="#" className="av-tooltip tool tip-label-bottom" onSubmit={login}>
                            <div className="form-group has-float-label form-group">
                                <label htmlFor="email" >
                                    E-mail
                                </label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Enter your Email address' id="email" className="form-control" required />
                              
                            </div>
                            <div className="form-group has-float-label form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Enter your password' name="password" id="password" required className="form-control" />
                                
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="#"  style={{fontSize: "12px",cursor: "pointer"}} >Forget password?</a>
                                <button type="submit" className="btn-shadow btn multiple-state btn btn-lg">
                                    <span className="spinner d-inline-bloack">
                                        <span className="bounce1"></span>
                                        <span className="bounce2"></span>
                                        <span className="bounce3"></span>
                                    </span>
                                    <span className="label" >LOGIN</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
  <ToastContainer/>
  </>
  )
}

export default Login