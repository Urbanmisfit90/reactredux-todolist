import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, editTodo, removeTodo } from '../redux/todoSlice';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo({ id, text: newText }));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onToggleTodo={handleToggleTodo} 
        onEditTodo={handleEditTodo} 
        onRemoveTodo={handleRemoveTodo} 
      />
    </div>
  );
};

export default TodoApp;
