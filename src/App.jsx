import React, { Component, useEffect, useState } from "react"; 
import TodoFooter from "./components/TodoFooter"; 
import TodoForm from "./components/TodoForm"; 
import TodoList from "./components/TodoList"; 
import { v4 as generateId } from 'uuid'; 
import styles from "./App.module.scss";
 
function App() { 
  const [todos, setTodos] = useState( 
    [] 
  ) 
 
  useEffect(() => { 
    const todos = JSON.parse(localStorage.getItem('item')) || []; 
 
    setTodos(todos); 
  }, []) 
 
  useEffect(() => { 
    localStorage.setItem('item', JSON.stringify(todos)) 
  }, [todos]) 
 
  return ( 
    <div className={styles.App}> 
    <h2>TodoList</h2>
      <TodoForm 
        onAdd={(text) => { 
          setTodos([ 
            ...todos, 
            { 
              id: generateId(), 
              text: text, 
              isCompleted: false, 
            }, 
          ]); 
 
 
        }} 
      /> 
      <TodoList 
        todos={todos} 
        onDelete={(todo) => { 
          setTodos(todos.filter((t) => t.id !== todo.id)); 
        }} 
        onChange={(newTodo) => { 
          setTodos( 
            todos.map((todo) => { 
              if (todo.id === newTodo.id) { 
                return newTodo; 
              } 
              return todo; 
            }) 
          ); 
        }} 
      /> 
      <TodoFooter 
        todos={todos} 
        onClearCompleted={() => { 
          setTodos(todos.filter((todo) => !todo.isCompleted)); 
        }} 
      /> 
    </div> 
  ); 
} 
 
export default App;