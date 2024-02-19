import { createContext, useContext, useReducer, useRef} from "react";

export const ToDoContext = createContext();

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }],
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const textRef = useRef('')

  const submitHandler = (e) => {
    e.preventDefault()
    const text = textRef.current.value.trim();
    if (text) {
      addToDo(text);
      textRef.current.value = ''
    }
  }

  const addToDo = (text) => {
    dispatch({ type: "add", payload: text });
  }

  const deleteHandler = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const contextValue = {
    state,
    addToDo,
    deleteHandler,
    submitHandler,
    textRef
  };
  return (<ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>);
};

export const useToDoContext = () => useContext(ToDoContext);

