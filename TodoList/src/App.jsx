import './App.css'
import { useState } from 'react'

function App() {
  const [inputText, setValue] = useState();
  const [Todo, setTodo] = useState([]);

  let handleClick = ()=>{
    if(inputText !== "" && Todo !== ''){
      setTodo([...Todo, inputText]);
      setValue('');
    }
  };

  const deleteTask =(index)=>{
    const newTodo = Todo.filter((_,i)=> i !==index);
    setTodo(newTodo);

  }
  return (
   <>
    <div className="App" style={{border:'2px solid blue'}}>
      <div id='second-div'>
        <h1>Hello welcome to Todo list</h1>
        <div className='inputField'>
          <input className='mr-5 border-2 border-black'
          onChange={event => setValue(event.target.value) } value={inputText}/>
          <button className='border-2 border-black'
          onClick={handleClick}>Add Task</button>
        </div>
        <div className='displaytask'>
          <ol type="1" style={{paddingRight:'10px', paddingLeft:'10px'}}>
            {
            Todo.map((todos, index) =>(<li key={index} type='1'>{todos}  
            <button id='task' onClick={()=> deleteTask(index)}> ❌ </button>
            </li>))
            }
          </ol>
        </div>
      </div>
    </div>
   </>
  )
}
export default App