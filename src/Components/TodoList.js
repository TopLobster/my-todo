import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Todo from './Todo'

const StyledUl = styled.ul`
  border: 1px solid black;
  background-color: lightgray;
  padding: 0;

  li {
    margin: none;
    padding-left: 1em;
    list-style-position: inside;
  }

  li:nth-child(2n) {
    background-color: lightslategray;
  }
`

const TodoList = ({ todos, onTodoClick }) => (
  <StyledUl>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </StyledUl>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
