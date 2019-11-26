import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'

import styled from 'styled-components'
import VisibleTodoList from './Containers/VisibleTodoList'

const StyledDiv = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:300,400,700&display=swap');
  box-sizing: border-box;
  width: 20rem;
  margin: auto;
  background-color: lightblue;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 0 3px 7px -3px black;
  font-family: 'Fira Code', sans-serif;

  * {
    font: inherit;
    box-sizing: border-box;
  }
`

const App = () => (
  <StyledDiv>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </StyledDiv>
)

export default App
