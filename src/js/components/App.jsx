import React, { useState } from 'react';
import {TodoList} from './TodoList.jsx';
import {TodoForm} from './TodoForm.jsx';
import {EmptyState} from './EmptyState.jsx';
import { ItemCount } from './ItemCount.jsx';
import './styles.css';

export function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

    const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <ItemCount count={activeTodosCount} />
        </div>
      )}
    </div>
  );
}

