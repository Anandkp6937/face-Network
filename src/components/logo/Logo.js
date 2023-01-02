import React from 'react'
import Tilt from 'react-parallax-tilt';
import Logopng from './logo.png'
import './logo.css'

const Logo=()=>{
  return(

         <div className="logoDiv">
         <Tilt>
         <img src={Logopng} alt="logo"/>
         </Tilt>
        </div>


  )
}
export default Logo;
