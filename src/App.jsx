import { useState } from 'react';
import './App.css';
import Todo_App from './component';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo_App/>
    </>
  );
}

export default App;
