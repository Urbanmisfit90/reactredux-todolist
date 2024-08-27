import React from 'react';
import TodoCard from './TodoCard';
import PropTypes from 'prop-types';

export default function TodoList(props) {
  const { todos, handleEditTodo, handleDeleteTodo, handleToggleTodo } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          key={todo.id} // Use todo.id as the unique key
          index={index}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
          todo={todo} // Pass the todo object directly
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};

