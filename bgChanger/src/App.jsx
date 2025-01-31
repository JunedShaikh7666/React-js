import './App.css'
import { useState } from 'react'

 function App() {
  let [color, setColor] = useState('');
const colorCodes = {
  red: '#FF0000',
  green: '#008000',
  blue: '#0000FF',
  lavender: '#E6E6FA',
  peachpuff: '#FFDAB9',
  purple: '#800080',
  gray: '#808080',
  Lightgreen: '#90EE90',
  lightseagreen: '#20B2AA',
  lightcoral: '#F08080',
};
  return (
    <>
    <div style={{backgroundColor: color}}>
      {/* <h1>{color} {color && `(${color})`}</h1> */}
      <h1>{color ? colorCodes[color] : "Select a color :"}</h1>
      <button onClick={()=> {setColor("peachpuff")}}>Peach</button>
      <button onClick={()=> {setColor("lavender")}}>Lavender</button>
      <button onClick={()=> {setColor("gray")}}>HeavyGray</button>
      <button onClick={()=> {setColor("Lightgreen")}}>DimGreen</button>
      <button onClick={()=> {setColor("lightseagreen")}}>SeaBlue</button>
      <button onClick={()=> {setColor("lightcoral")}}>CoralPink</button> <br/>
      <button onClick={()=> {setColor('')}} style={{backgroundColor:'Black', color:'white'}}>Clear</button>   
    </div>
    </>
  )
}
export default App