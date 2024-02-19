import React from 'react'
import { useToDoContext } from '../context/ToDoContext'
import styled from 'styled-components'

const ToDoItems = () => {
    const {state, deleteHandler} = useToDoContext()
    const {todos} = state
  return (
    <div>
        <Ul>
        {todos.map((todo) => (
          <Li key={todo.id}>{todo.text}
          <Delete onClick={() => deleteHandler(todo.id)}>Delete</Delete>
          </Li>
        ))}
      </Ul>
    </div>
  )
}

export default ToDoItems

const Ul = styled.ul `
display: flex;
display: inline-block;
flex-direction: column;
`

const Li = styled.li `
  list-style-type: none;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  `

const Delete = styled.button `
  border-radius: 5px;
  margin-left:  10px;
  background-color: #8aced0;
`