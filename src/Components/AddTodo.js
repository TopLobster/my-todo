import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'
import styled from 'styled-components'

const StyledDiv = styled.div`
  form {
    display: flex;
    flex-flow: row nowrap;
  }

  input {
    border: 1px solid steelblue;
    background-color: whitesmoke;
    border-style: inset;
    border-right: none;
    flex-grow: 1;
  }

  button {
    border: 1px solid black;
    background: linear-gradient(steelblue 0%, lightskyblue 100%);
    flex-basis: 33%;
  }
`

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <StyledDiv>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </StyledDiv>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
