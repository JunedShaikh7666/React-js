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
     <div className="demo">
      <h1>{inputvalue}</h1>
      <input type="text" value={inputvalue} onChange={onchange}/>
     </div>
    </>
  )
}
export default App