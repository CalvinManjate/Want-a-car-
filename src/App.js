import React   from 'react';
import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import BookingAppointment from './BookingAppointment';
import About from './about';
import Contact from './contact';
function App() {

  
  return (
    <div>
    <BrowserRouter>
    <Navbar/>    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='BookingAppointment' element={<BookingAppointment/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App;
