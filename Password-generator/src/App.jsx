import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password,setPassword] = useState("");
  const [isEditable,setIsEditable] = useState(false)

  //UseRef hook use here.
  const passwordRef = useRef(null);

  const passwordGenerator =useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str += '0123456789';
    if(charAllow) str += '!@#$%&*_';

    for(let i = 1; i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length,numberAllow,charAllow,setPassword])

  const copyTextToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]);

  const handleInputChange = (e) => {
    if (isEditable) {
      setPassword(e.target.value); 
    }
  };

  const setInput = useCallback(() => {
    setPassword(''); 
    setIsEditable(true); 
    passwordRef.current?.focus(); 
  }, []);
  
  //UseEffect Hook use here
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow, passwordGenerator])
  
  return (
    <>
      
      <div className='w-full max-w-md  mx-auto mt-30 shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white mb-10'>Password Generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          onChange={handleInputChange}
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly={!isEditable}
          ref={passwordRef}
          />
          <button 
          id='copy'
          onClick={copyTextToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'          
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={20}
            value={length}
            className='coursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked ={numberAllow}
            id='numInput'
            onChange={()=>{setNumberAllow((prev)=>!prev);
            }}
            />
            <label htmlFor="numInput">+Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked ={charAllow}
            id='charInput'
            onChange={()=>{setcharAllow((prev) => !prev);
            }}
            />
            <label htmlFor="charInput">+Charecters</label>
          </div>

        </div>
        <div className="flex sm:justify-center gap-2">

          <div onClick={setInput}>
            <button id='newpass' className='border-1 w-50 h-8 mt-5'>Create your Own</button>
          </div>
          
          <div onClick={passwordGenerator}>
            <button id='resetpass' className='border-1 w-50 h-8 mt-5'>Reset / Refresh</button>
          </div>
        
        </div>

      </div>

      <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800'>
        <textarea  className='bg-white w-full m-0 p-10' placeholder="Write you'r Copied Password..."></textarea>
      </div>

    </>
  )
}
export default App