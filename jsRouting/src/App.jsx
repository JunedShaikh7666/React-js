
import 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'; // Correct path to Home component
import About from './components/About'; // Correct path to About component
import Dashboard from './components/Dashboard';


const router= createBrowserRouter (
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:'/Dashboard',
      element:<Dashboard/>
    }
  ]
)

function App() {

  return(
    <>
    <div className="">
      <RouterProvider router={router}/>
    </div>
    </>
  )
}
export default App