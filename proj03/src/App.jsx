import { useState } from 'react'
import './App.css'

function App() {
  let [color,setcolor] = useState();
  let changecolor = ()=>{
  }
  

  return (
    <>
      <div className="menu " >
        <ul>
          <button onChange={color} className='red'>Red</button>
          <button onChange={color} className='yellow'>Yellow</button>
          <button onChange={color} className='green'>Green</button>
          <button onChange={color} className='blue'>Blue</button>
          <button onChange={color} className='peach'>peach</button>
          <button onChange={color}className='lavender'>lavender</button>
        </ul>
        </div>      
    </>
  )
}
export default App