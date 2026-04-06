import React from 'react'
import logo from "../../assets/vite.svg"
import {Link} from "react-router-dom"


const navbar = () => {
  return (
    <div>
       <div className=' flex justify-between pl-10 pr-12 bg-[#406093] items-center '> 
       <Link  to="/">
        <img src={logo} alt="" />
        </Link>
          <Link  to="/">
       <p>Home </p>
        </Link>
        
      <Link to="/create">
        <button className='bg-green-400 rounded-xl w-40 h-7 hover:cursor-pointer'>Create Employee</button>
      </Link>
             
            
  
       </div>
    </div>
  )
}

export default navbar
