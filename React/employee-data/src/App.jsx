import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Home from './Components/Screens/Home'
import EditEmployee from './Components/Screens/EditEmployee'
import EmployeeDetails from './Components/Screens/EmployeeDetails'
import CreateEmployee from './Components/Screens/CreateEmployee'
import Navbar from '../src/Components/common/Navbar'
import Footer from '../src/Components/common/Footer'
const App = () => {
  return (
    <div>

      
    <BrowserRouter>
    <Navbar/>

    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/edit" element={<EditEmployee/>}/>
         <Route path="/details" element={<EmployeeDetails/>}/>
         <Route path="/create" element={<CreateEmployee/>}/>
         
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </div>
  )
}

export default App
