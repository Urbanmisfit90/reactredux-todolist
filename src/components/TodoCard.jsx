import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { handleDeleteTodo, index, handleEditTodo, handleToggleTodo, todo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  const textDecoration = todo.completed ? 'line-through' : 'none';

  const handleToggleEdit = () => {
    if (isEditing) {
      // Save the edit when toggling off edit mode
      handleSaveEdit();
    } else {
      setIsEditing(true);
    }
    if (!isEditing && inputRef.current) {
      inputRef.current.focus(); // Focus the input field when editing starts
    }
  };

  const handleEditInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      handleEditTodo(todo.id, editText.trim()); // Update todo with new text directly
      setIsEditing(false); // Exit edit mode after saving
    }
  };

  return (
    <li className="todoItem" style={{ textDecoration }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(index)}
      />
      {isEditing ? (
        <input
          type="text"
          ref={inputRef}
          value={editText}
          onChange={handleEditInputChange}
          onBlur={handleSaveEdit} // Save on blur
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="actionsContainer">
        <button onClick={handleToggleEdit}>
          {isEditing ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-pen-to-square"></i>
          )}
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

