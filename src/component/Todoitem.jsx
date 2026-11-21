import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitem = ({text}) => {
  return (
    <div className = 'flex items-center my-3 gap-2'>

      <div className='flex flex-1 items-center cursor-pointer gap-2'>
        <img src={tick} alt="Todo item" />
        <p className='tex-slate-700 ml-4 text-[17p]'>
        {text}</p>
      </div>

      <div>
        <img src={delete_icon} alt="Delete" 
        className='w-6 h-6 cursor-pointer' />
      </div>

    </div>
  )
}

export default Todoitem