import React,{Component} from 'react'
import ParticlesBg from 'particles-bg'
// import  {ClarifaiStub} from "clarifai-nodejs-grpc";
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Imagelinkform from './components/imagelinkform/Imagelinkform'
import Facerecoginition from './components/facerecoginition/Facerecoginition'
import Signin from './components/signin/Signin'
import Register from './components/register/Register'
import Rank from './components/rank/Rank'

import './index.css'
const USER_ID = 'anandsvd';
   // Your PAT (Personal Access Token) can be found in the portal under Authentification
   const PAT = '1290976879864dc285deced3acc328e1';
   const APP_ID = 'facerecoginition';
   // Change these to whatever model and image URL you want to use
   const MODEL_ID = 'face-detection';
   const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
    const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';
class App  extends Component{

  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:"signin"
    }
  }

calculateFace=(data)=>{
  const clarfaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById("inputimage");
  const width=Number(image.width);
  const height=Number(image.height);
  console.log("width:",width);
  console.log("height:",height);
  return{
    leftCol:clarfaiFace.left_col*width,
    topRow:clarfaiFace.top_row*height,
    rightCol:width-(clarfaiFace.right_col*width),
    bottomRow:height-(clarfaiFace.bottom_row*height)
  }
}

displayFacebox=(box)=>{
  console.log(box);
  this.setState({box:box});
}
  onInputchange=(event)=>{
    console.log(event.target.value);
    this.setState({input:event.target.value});
    console.log("state value:",this.state.input);
  }
  onRoutechange=(route)=>{
    this.setState({route:route});
  }
  onSubmitting=()=>{
this.setState({imageUrl:this.state.input})
console.log("imageurl value",this.state.imageUrl);
    console.log("submitted image");
    const raw = JSON.stringify({
       "user_app_id": {
           "user_id": USER_ID,
           "app_id": APP_ID
       },
       "inputs": [
           {
               "data": {
                   "image": {
                       "url": IMAGE_URL
                   }
               }
           }
       ]
   });

   const requestOptions = {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Authorization': 'Key ' + PAT
       },
       body: raw
   };
   fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response =>response.text())
        .then(result=>this.displayFacebox(this.calculateFace(JSON.parse(result))))
        // .then(result =>console.log(JSON.parse(result).outputs[0].data.regions[0].region_info.bounding_box))
        .catch(error => console.log('error', error))
}
  render(){
    return(
      <div>
       <ParticlesBg type="circle" bg={true} />
       <Logo />
       {
         this.state.route==='home'
         ? <div>
         <Navigation onRoutechange={this.onRoutechange}/>
       <Imagelinkform  onInputchange={this.onInputchange} onSubmitting={this.onSubmitting}/>
       <Rank />
       <Facerecoginition box={this.state.box} imageUrl={this.state.imageUrl}/>
         </div>
         :(this.state.route==='signin'
         ?<Signin  onRoutechange={this.onRoutechange}/>
         :<Register onRoutechange={this.onRoutechange}/>
         )
     }
      </div>
    )
  }
}

export default App;
