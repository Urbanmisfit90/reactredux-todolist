import React from 'react';
import TodoCard from './TodoCard';
import PropTypes from 'prop-types';

export default function TodoList(props) {
  const { todos, handleEditTodo, handleDeleteTodo } = props;

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          index={todoIndex}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          todo={todo} // Make sure to pass the todo prop
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
