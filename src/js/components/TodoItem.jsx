import React, { useState } from 'react';

export const TodoItem = ({ todo, deleteTodo }) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <li 
      className="todo-item"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <span>{todo.text}</span>
      {showDelete && (
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="delete-btn"
          aria-label="Eliminar tarea"
        >
          × 
        </button>
      )}
    </li>
  );
};

