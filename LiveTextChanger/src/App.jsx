import { useState } from 'react';
import './App.css'

function App() {
  let [inputvalue,newValue] = useState('Shaikh Juned');
  const onchange = (event) =>{
    const setvalue = event.target.value;
    newValue(setvalue)
  }
  

  return (
    <>
    <h1>{inputvalue}</h1>
     <div className="demo">
      <input type="text" value={inputvalue} onChange={onchange}/>
      <button onClick={()=>{newValue('Shaikh Juned')}}>Clear Screen</button>
     </div>
     
    </>
  )
}
export default App