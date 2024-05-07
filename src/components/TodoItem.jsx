import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import { BiEdit, BiSave, BiX,} from 'react-icons/bi';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <>
      <div
          className={` flex border border-black/10 rounded-xl px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#e7adb7]" : "bg-[#8dc5bf]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer accent-current  text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
        
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
    

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? <BiSave size={20}/> : <BiEdit size={20}/>}
          </button>

          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              <BiX size={20}/>
          </button>

      </div>
     
      </>
      
  );
}

export default TodoItem;


// <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
//     <div class="px-4 py-2">
//         <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
//     </div>
 
//     <ul class="divide-y divide-gray-200 px-4">
//         <li class="py-4">
//             <div class="flex items-center">
//                 <input id="todo1" name="todo1" type="checkbox"
//                     class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
//                 <label for="todo1" class="ml-3 block text-gray-900">
//                     <span class="text-lg font-medium">Finish project proposal</span>
//                     <span class="text-sm font-light text-gray-500">Due on 4/1/23</span>
//                 </label>
//             </div>
//         </li>
//         <li class="py-4">
//             <div class="flex items-center">
//                 <input id="todo2" name="todo2" type="checkbox"
//                     class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
//                 <label for="todo2" class="ml-3 block text-gray-900">
//                     <span class="text-lg font-medium">Buy groceries</span>
//                     <span class="text-sm font-light text-gray-500">Bananas, milk, bread</span>
//                 </label>
//             </div>
//         </li>
//         <li class="py-4">
//             <div class="flex items-center">
//                 <input id="todo3" name="todo3" type="checkbox"
//                     class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
//                 <label for="todo3" class="ml-3 block text-gray-900">
//                     <span class="text-lg font-medium">Go for a run</span>
//                     <span class="text-sm font-light text-gray-500">3 miles</span>
//                 </label>
//             </div>
//         </li>
//     </ul>
// </div>