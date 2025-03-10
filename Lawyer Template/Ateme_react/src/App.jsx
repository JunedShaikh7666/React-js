import "react";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import {Routes, Route} from 'react-router-dom';  
import Blog from "./pages/Blog";
import What from "./pages/What";
import Contact from "./pages/Contact";


function App() {

  return (
    <>
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/what" element={ <What />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App