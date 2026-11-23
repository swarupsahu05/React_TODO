import { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitem from './Todoitem'

const Todo = () => {

    const [todoList, setTodosList] = useState(localStorage.getItem("todos")?
    JSON.parse(localStorage.getItem("todos")): []);

    const inputRef = useRef();

    // Add Todo
    const add = () => {

        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return;
        }

        const newTodos = {
            id: Date.now(),
            text: inputText,
            isCompleted: false,
        };

        setTodosList((prev) => [...prev, newTodos]);

        inputRef.current.value = "";
    };

    // Delete Todo
    const deleteTodo = (id) => {
        setTodosList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    const toggle = (id) => {
    setTodosList((prevTodos) => {
        return prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,isCompleted: !todo.isCompleted
                };
            }
            return todo;
        });
    });
};
    useEffect (()=> {
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])

    return (
        <div className="bg-white place-self-center w-11/12 max-w-md 
        flex flex-col p-7 min-h-[400px] rounded-lg shadow-lg">

            {/* Title */}
            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} alt="Todo icon" />
                <h1 className="text-3xl font-semibold">TO-DO List</h1>
            </div>

            {/* Input Box */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>

                <input
                    ref={inputRef}
                    className='bg-transparent border-0 outline-none 
                    flex-1 h-14 pl-6 pr-4 placeholder:text-slate-600'
                    type='text'
                    placeholder='Add your task here...'
                />

                <button
                    onClick={add}
                    className='border-none bg-orange-600 w-32 h-14 text-white text-lg 
                    font-medium rounded-full cursor-pointer'
                >
                    Add +
                </button>

            </div>

            {/* Todo List */}
            <div>
                {todoList.map((item) => (
                    <Todoitem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        isComplete={item.isCompleted}
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                ))}
            </div>

        </div>
    );
};

export default Todo;