import React from 'react';
import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo, handleToggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoCard
          key={todo.id}
          index={index}
          todo={todo}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};


