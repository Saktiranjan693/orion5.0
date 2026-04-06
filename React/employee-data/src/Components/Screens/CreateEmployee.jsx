import React from 'react'

const CreateEmployee = () => {
  return (
    <div className='min-h-screen bg-[#6a7268eb] flex justify-center items-center px-22 py-10'>
         <div className='text-center border-2 bg-[#76b6a3] border-gray-400 pt-3 rounded-lg shadow-lg  ' >
           <h1 className='text-lg font-bold text-center'>Create Employee</h1>

           <form action="" className='flex flex-col gap-5 min-w-lg '>
            <input type="text" name="" id=""  placeholder='Enter name' className='p-2 mt-3 text-center ml-5 mr-5 rounded  border-none outline-none bg-white text-lg'/>
            <input type="text" placeholder='Enter Employee Designation'className='p-2 rounded   ml-5 mr-5 border-none outline-none bg-white text-lg' />
            <input type="text"  placeholder='Employee Salary' className='p-2 rounded  ml-5 mr-5  border-none outline-none bg-white text-lg'/>
            <input type="text" placeholder='Employee Experience' className='p-2 rounded  ml-5 mr-5  border-none outline-none bg-white text-lg' />

            <button className='rounded cursor-pointer bg-blue-500 pt-2 pb-2 mt-2 mb-3'>
              Create Employee
            </button>
           </form>
           
         </div>
        

    </div>
  )
}

export default CreateEmployee
