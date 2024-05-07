import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) {
         alert('Write Something First...')
         return
      }

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    
   <form onSubmit={add} className="w-full max-w-sm mx-auto px-4 py-2 ">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
                className="appearance-none bg-transparent placeholder:text-gray-600 border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Add a task. . ."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
            <button
                className="flex-shrink-0 active:scale-90 transition-all bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit">
                Add
            </button>
        </div>
    </form>
  );
}

export default TodoForm;