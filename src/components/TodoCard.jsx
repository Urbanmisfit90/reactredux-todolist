import React from 'react';
import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo, todo } = props;

  return (
    <li className="todoItem">
      {children || todo}
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
  children: PropTypes.node,
  handleDeleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired, // Ensure this is defined and passed correctly
};
