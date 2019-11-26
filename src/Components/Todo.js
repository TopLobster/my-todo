import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, onDeleteClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={(e) => {
      e.stopPropagation()
      onDeleteClick()
    }}
    >X
    </button>

  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
