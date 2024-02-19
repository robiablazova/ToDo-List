import React from "react";
import { useToDoContext } from "../context/ToDoContext";
import styled from "styled-components";

const TodoForm = () => {
  const {submitHandler, textRef} = useToDoContext();

  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" ref={textRef}/>
      <Button type="submit">Add</Button>
    </Form>
  );
};


export default TodoForm;

const Form = styled.form`
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

const Input = styled.input`
  height: 30px;
  width: 200px;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: lightgrey;
  border-radius: 5px 5px 0 0;
  margin-bottom: 5px;
`;

const Button = styled.button`
  height: 30px;
  width: 200px;
  background-color: cadetblue;
  border-radius: 5px;
  border: none;
`;
