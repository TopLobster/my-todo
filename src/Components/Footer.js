import React from 'react'
import FilterLink from './Containers/FilterLink'
import { VisibilityFilters } from '../store/actions'
import styled from 'styled-components'

const StyledP = styled.p`
  margin-bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  > * {
    flex: 0 0 33%;
    text-align: center;
    border-right: 1px solid black;
  }

  > *:last-child {
    border: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  span {
    text-decoration: underline;
    font-weight: bold;
  }
`

const Footer = () => (
  <StyledP>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </StyledP>
)

export default Footer
