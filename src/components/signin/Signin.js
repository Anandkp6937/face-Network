import React from 'react'
import './signin.css'
const Signin=({onRoutechange})=>{
  return(
    <div className="signin">
    <h1>Sign IN</h1>
    <form>
    <input type="email" required placeholder="enter email Id"/>
    <input type="password" required placeholder="enter your Password"/>
    <button onClick={()=>onRoutechange("home")}>Signin</button>
    <h5 id="reg" onClick={()=>onRoutechange("register")}>Register</h5>
    </form>
    </div>
  )
}
export default Signin
