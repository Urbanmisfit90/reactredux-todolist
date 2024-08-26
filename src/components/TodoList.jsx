import React from 'react'
import TodoCard from './TodoCard'
import PropTypes from 'prop-types';

export default function TodoList(props) {
  const { todos } = props

  PropTypes.checkPropTypes({
    todos: PropTypes.arrayOf(PropTypes.string).isRequired
  }, props);

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} index={todoIndex} {...props}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
};
