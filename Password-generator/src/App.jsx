
import { use } from 'react';
import './App.css'

function App() {
  const [length,setLength] = useState(20);
  const [number, setNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState();

  const passwordGenerator = () =>{
    
  }

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='' style={{backgroundColor: "gray", width: '50%', margin: 'auto', padding: '20px', borderRadius: '10px'}}>
        <label className='text-xl bg-white weidth-100'>Hello</label><br />
      <input type="range" style={{width:'100', color:'white'}}/>
      </div>
    </>
  )
}
export default App