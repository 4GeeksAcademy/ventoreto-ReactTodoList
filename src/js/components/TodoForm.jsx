import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') {
      alert('La tarea no puede estar en blanco');
      return;
    }
    
    addTodo(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Agregar una nueva tarea..."
        className="todo-input"
      />
    </form>
  );
};

