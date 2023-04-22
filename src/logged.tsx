import "./App.css";
import { motion } from "framer-motion";
import LoggedNavbar from "./loggedBar";
import { textVariant } from "./animations";
import { RiTodoLine } from "react-icons/ri";
import { useState } from "react";

function Logged() {
  function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 1; i++) {
      const todoOption = {
        id: i,
        text: `Przykładowy element`,
      };
      initialTodos.push(todoOption);
    }
    return initialTodos;
  }

  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState("");

  return (
    <>
      <LoggedNavbar />
      <motion.div
        variants={textVariant(0)}
        animate={{ y: [100, 0, 0] }}
        className="container"
      >
        <div className="content">
          <h1>
            <RiTodoLine />
            Todo list
          </h1>
          <div className="add-item">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="addButton"
              onClick={() => {
                setText("");
                setTodos([{ id: todos.length, text: text }, ...todos]);
              }}
            >
              Add
            </button>
          </div>
          <br />
          <div className="boxes">
            {todos.map((todo) => (
              <div key={todo.id} className="item">
                <div className="item-text">
                  {`[ ${todo.id} ] `}
                  {todo.text || "Brak tekstu"}
                </div>
                <div className="options">
                  <button
                    className="deleteButton"
                    onClick={() => {
                      setTodos(todos.filter((item) => item.id !== todo.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Logged;
