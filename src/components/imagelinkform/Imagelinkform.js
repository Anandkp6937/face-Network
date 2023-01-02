import React from 'react'
import './imagelinkform.css'
const Imagelinkform=({onInputchange,onSubmitting})=>{
  return(
    <div>
    <h1>{"This Facenetwork will Detect Face"}</h1>
    <div className="cent">
    <div className="form">
    <input type="text" placeholder="Paste your imagelink" onChange={onInputchange}/>
    <button onClick={onSubmitting}>Detect</button>
    </div>
</div>
    </div>
  )
}
export default Imagelinkform;
