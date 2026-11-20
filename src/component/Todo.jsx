import React from 'react'
import todo_icon from '../assets/todo_icon.png'
const Todo = () => {
  return (
    <div className = "bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[400px] rounded-lg shadow-lg">
         


        {/* ----------title ---------- */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon}></img>
            <h1 className = 'text-3xl font-semibold'> TO-DO List</h1>
        </div>

        {  /* ----------inputBox ---------- */}

        <div className= 'flex items-center my-7 bg-gray-200 rounded-full'>
            <input className='bg-transparent boerder-0 outline-none
             flex-1 h-14 pl-6 pr-4 placeholdertext-slate-600'

             type='text' placeholder= 'Add your task here...'></input>

            <button className='border-none rounded-full bg-orange-600  w-32 h-14 text-white text-lg
             font-medium rounded-full courser-pointer' >Add +</button>

        </div>
    
    </div>
  )
}

export default Todo