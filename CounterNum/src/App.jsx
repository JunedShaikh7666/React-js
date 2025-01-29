import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  const addValue = () =>{
        if(counter<10){
          counter = counter +1;
          setCounter(counter);
        }
  }
  const lessValue = () =>{
    if(counter>0){
    counter = counter -1;
    setCounter (counter);}
  }
  const resetNum = () =>{
    counter = 0;
    setCounter (counter);
  }
  return (
    <>
      <h1>Welcome to my first React project as Counter numbers</h1>
      <h3>Counter Value : {counter}</h3>
      
      <button onClick={addValue}>Add num </button><br/><p>So you added the num of {counter}</p>
      <button onClick={lessValue}>Less num </button><br/><p>Or So you less the num of {counter}</p>
      <button onClick={resetNum}>Reset num </button><p>remove all the numbers and make it Zero 0</p>
    </>
  )
}
export default App