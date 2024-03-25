import { useState } from 'react'
import TodoList from './components/TodoList'
import Form from './components/Form'
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="todoapp">
      <div className="header">
        <h1>todos</h1>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}
export default App;