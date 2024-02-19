import "./App.css";
import ToDoItems from "./components/todo/ToDoItems";
import TodoForm from "./components/todo/TodoForm";

function App() {
  return (
    <div className="App" >
        <TodoForm />
        <ToDoItems />
    </div>
  );
}

export default App;
