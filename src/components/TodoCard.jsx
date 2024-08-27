import React from 'react';
import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { handleDeleteTodo, index, handleEditTodo, handleToggleTodo, todo } = props;

  return (
    <li className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(index)}
      />
      <span>{todo.text}</span> {/* Render todo.text */}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
  handleDeleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
