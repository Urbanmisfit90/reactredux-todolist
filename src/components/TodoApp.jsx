import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, editTodo, removeTodo } from '../redux/slices/todoSlice';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.items); // Access todos from state
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text)); // Dispatch addTodo action
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); // Dispatch toggleTodo action
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo({ id, text: newText })); // Dispatch editTodo action
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id)); // Dispatch removeTodo action
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
