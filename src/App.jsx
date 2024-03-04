import { useState } from 'react';
import './App.css';
import State from './state_setState_eventHandler';
// import Todo_App from './component';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Todo_App/> */}
      
      <State/>
    </>
  );
}

export default App;
