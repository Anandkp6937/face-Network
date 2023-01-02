import React from 'react'
import Faceimg from './face.jpg'
import './face.css'

const Facerecoginition=({imageUrl,box})=>{
  return(
    <div className="face">
    <img id="inputimage" src={imageUrl} alt="faceimage"/>
    <div className="border" style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>
    </div>
  )
}
export default Facerecoginition;
