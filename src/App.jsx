import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { BiCircle, BiTask } from "react-icons/bi";
import react from "./assets/react.svg";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // bg-[#f5f1f1]

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className=" bg-purple-500 py-8 px-4  ">
        <div className="flex-col flex md:flex-row min-h-[550px] h-full  border-4 rounded-xl  overflow-hidden ">
          <div className="right bg-[#f5f1f1] border-b-4 md:border-r-4 shadow:md p-4     md:p-6">
            <div className="profile flex justify-center md:justify-start items-center gap-2">
              <div className="profile_pic">
                <img src={react} alt="" />
              </div>
              <div className="details ">
                <div className=" font-medium">Do-It</div>
                <div className=" text-purple-500 font-semibold ">Yogesh Negi</div>
              </div>
            </div>
            <div className=" px-4">
              <hr className=" text-2xl font-bold mt-6  border-purple-500" />
            </div>

            <div className=" mt-8 flex gap-8">
              <div>
                <BiTask size={20} className=" text-purple-500" />
              </div>
              <div>
                <h2 className=" mb-3 md:mb-6 font-bold ">Todays Task</h2>
                <ul className="flex flex-row md:flex-col gap-2 font-normal ">
                  <div className=" flex gap-2 items-center ">
                    <BiCircle size={12} className=" text-orange-500 " />
                    <li>Personal</li>
                  </div>
                  <div className=" flex gap-2 items-center ">
                    <BiCircle size={12} className=" text-blue-500"  />
                    <li>Freelance</li>
                  </div>
                  <div className=" flex gap-2 items-center ">
                    <BiCircle size={12} className=" text-yellow-500"  />
                    <li>Work</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto shadow-lg rounded-sm px-4 py-3">
            <div className=" flex w-full justify-center items-center p-4 b">
              <h1 className="text-4xl text-white font-bold text-center mr-3 ">
                To Do List{" "}
              </h1>
              <BiTask size={35} className=" text-white" />
            </div>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.length === 0 ? (
                <div className="text-center text-white w-full text-2xl py-2">
                  No Tasks Yet !
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
