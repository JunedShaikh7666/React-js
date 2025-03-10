
import Contact from './pages/Contact'
import Home from './pages/Home'
import Trainer from './pages/Trainer'
import Why from './pages/Why'
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (
   <div className='App'>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/why' element={<Why />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Trainer' element={<Trainer />}/>

    </Routes>
   
   </div>
  )
}
export default App