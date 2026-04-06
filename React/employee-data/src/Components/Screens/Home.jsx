import React from 'react'

const Home = () => {
  return (
    <div className='h-screen grid grid-cols-4 gap-4 px-22 py-10'>
      
     <Employeecard/>
     <Employeecard/>
     <Employeecard/>
     <Employeecard/>
     <Employeecard/>
     <Employeecard/>


      
    </div>
  )
}

export default Home


const Employeecard =()=>{
  return(
             <div className='flex flex-col p-6 h-50 rounded-lg bg-gray-600  text-white'>
          <h3>name</h3>
          <h3>Designation</h3>
          <h3>salary</h3>
          <h3>Experience</h3>

          <div className='flex justify-between items-center'>
            <button className='bg-green-600 rounded-lg cursor-pointer w-24 mt-5 text-lg text-white'>
              Dteails
            </button>
            <button  className='bg-red-600 rounded-lg cursor-pointer w-24 mt-5 text-lg text-white'>
              Delete
            </button>
          </div>
        </div>
  );
};