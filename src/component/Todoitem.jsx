import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitem = ({ text, id, isComplete, deleteTodo, toggle }) => {

    return (
        <div className='flex items-center my-3 gap-2'>

            <div
                onClick={() => toggle(id)}
                className='flex flex-1 items-center cursor-pointer gap-2'
            >

                <img
                    src={isComplete ? tick : not_tick}
                    alt="Todo item"
                />

                <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' :
                  ''}`}>
                    {text}
                </p>

            </div>

            <div>
                <img
                    onClick={() => deleteTodo(id)}
                    src={delete_icon}
                    alt="Delete"
                    className='w-6 h-6 cursor-pointer'
                />
            </div>

        </div>
    )
}

export default Todoitem