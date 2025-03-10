import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Docters from './Pages/Docters';
import Services from './Pages/Services';
import Pages from './Pages/Pages';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Pages/Blog';
function App() {

  return (
    <>
    <div className="">
    <Header />
      <Routes>      
        <Route path='/' element={<Home />} />
        <Route path='/docters' element={<Docters />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/pages' element={<Pages />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/contactUs' element={<ContactUs />}/>
      </Routes>
    <Footer />
    </div>
    </>
  )
}

export default App
