import React from 'react'
import './register.css'
const Register=({onRoutechange})=>{
  return(
    <div className="signin">
    <h1>Register</h1>
    <form>
    <input type="text" required placeholder="enter your Name"/>
    <input type="email" required placeholder="enter email Id"/>
    <input type="password" required placeholder="enter your Password"/>
    <button onClick={()=>onRoutechange("home")}>Signin</button>
    <h5 id="reg" onClick={()=>onRoutechange("signin")}>Login</h5>
    </form>
    </div>
  )
}
export default Register
