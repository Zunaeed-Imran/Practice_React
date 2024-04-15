import { useState } from 'react';
import './App.css'
import New_todo from './components/New_todo';
import Todos from './components/Todos';

const todosData = [
  {
    id: '1',
    title: 'todo title 1',
  },
  {
    id: '2',
    title: 'todo title 2',
  },
  {
    id: '3',
    title: 'todo title 3',
  },
  {
    id: '4',
    title: 'todo title 4',
  },
  {
    id: '5',
    title: 'todo title 5',
  },
  {
    id: '6',
    title: 'todo title 6',
  },
];



function App() {

  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodo = (id: string) => {
    const filterTodos = todos.filter(todo => todo.id !== id);
    setTodos(filterTodos);
  }


  const handleAddNewTodo = (newTodo: todoType) => {
    setTodos((preState) => [...preState, newTodo]);
  };

  return (
    <>
      <New_todo handleAddNewTodo={handleAddNewTodo} />

      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App
