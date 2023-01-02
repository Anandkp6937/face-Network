import React from 'react'
import './navigation.css'

const Navigation=({onRoutechange})=>{
  return(
    <nav>
    <p id="signout" onClick={()=>onRoutechange("signin")}>SignOut</p>
    </nav>
  )
}
export default Navigation;
