import './App.css'
import { useState } from 'react'

 function App() {
  let [color, setColor] = useState('');


  return (
    <>
    <div style={{backgroundColor: color}}>
      <button onClick={()=> {setColor("red")}} style={{background:{}}}>Red</button>
      <button onClick={()=> {setColor("green")}}>Green</button>
      <button onClick={()=> {setColor("blue")}}>Blue</button>
      <button onClick={()=> {setColor("lavender")}}>Lavender</button>
      <button onClick={()=> {setColor("peachpuff")}}>Peach</button>
      <button onClick={()=> {setColor("purple")}}>purple</button> <br/>
      <button onClick={()=>{setColor('')}} style={{backgroundColor:'Black', color:'white'}}>Clear</button>   
    </div>
    </>
  )
}

export default App
