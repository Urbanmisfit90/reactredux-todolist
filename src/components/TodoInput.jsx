import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const handleAddTodo = useCallback(() => {
    if (todoValue.trim() === '') {
      alert('Needs a todo');
    } else {
      handleAddTodos(todoValue);
      setTodoValue('');
    }
  }, [todoValue, handleAddTodos, setTodoValue]);

  const handleInputChange = useCallback((e) => {
    setTodoValue(e.target.value);
  }, [setTodoValue]);

  return (
    <header>
      <input 
        value={todoValue} 
        onChange={handleInputChange} 
        placeholder="Enter todo..." 
      />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
}

TodoInput.propTypes = {
  handleAddTodos: PropTypes.func.isRequired,
  todoValue: PropTypes.string.isRequired,
  setTodoValue: PropTypes.func.isRequired,
};

