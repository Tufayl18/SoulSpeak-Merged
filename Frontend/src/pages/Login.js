import Navbar from "../components/Navbar";
import { useState } from "react";
import React from 'react'


const Login = () => {

  const [identity, setidentity] = useState('doctor')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const btnAction = async (e) => {
    e.preventDefault()
    const URL = "http://localhost:5000/api/login"
    try{
      const response = await fetch(URL, {
        method:"POST",
        credentials: "include",
        headers:  {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
        body: JSON.stringify({identity, email, password})
      })
  
      const data = await response.json()

      if(data.status == 200 ){
        alert(data.msg)
        if(identity == "doctor"){
          window.location.href="http://localhost:3000/DoctorDashboard"
        }
        else{
          window.location.href="http://localhost:3000/UserDashboard"
        }
      }
      else{
        alert(data.msg)
      }
    }
    
    catch(e){
      console.log("Error", e)
    }
  }




  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[750px] overflow-hidden text-center text-5xl text-rosybrown font-inter">
      <Navbar logIn="Log In" />
      <div className="absolute top-[116px] left-[319px] bg-gray-100 [backdrop-filter:blur(29.8px)] w-[826px] h-[553px] overflow-hidden flex flex-col items-center justify-start py-[51px] px-2.5 box-border">
        <b className="w-[833px] relative tracking-[0.1em] flex items-center justify-center">
          LOGIN
        </b>
        <div className="overflow-hidden flex flex-row items-center justify-start p-2.5 gap-[10px] text-xl">
          <img
            className="w-[400px] relative h-[400px] object-cover"
            alt=""
            src="/login-1@2x.png"
          />
          <div className="h-[395px] overflow-hidden flex flex-col items-center justify-start py-[45px] px-2.5 box-border gap-[19px]">
            <b className="w-[190px] relative flex items-center justify-center h-[30px] shrink-0">
              Welcome back !
            </b>
            <select value = {identity}  onChange={(e)=> setidentity(e.target.value)} className="px-[20px] w-[301px] relative rounded-31xl bg-white h-[47px] overflow-hidden shrink-0" >
              <option value="doctor">Doctor</option>
              <option value="user">User</option>
              </select>
            <input value = {email}  onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Your Registered Email" type="email" className="px-[20px] w-[301px] relative rounded-31xl bg-white h-[47px] overflow-hidden shrink-0" />
            <input value = {password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Enter Your Passsword"type="password" className="px-[20px] w-[301px] relative rounded-31xl bg-white h-[47px] overflow-hidden shrink-0" />
            
            <button onClick={btnAction} className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
              <b className="relative text-xl font-inter text-plum text-center">
                Log In
              </b>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;