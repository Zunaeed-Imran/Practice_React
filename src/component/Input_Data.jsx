import React, { useState } from 'react'



const Input_Data = () => {

  const [todo, setTodo] = useState(['try']);
  const [newTodo, setNewTodo] = useState('');


  function Changeinput(event) {
    setNewTodo(event.target.value);
  }

  function addTask() {
    if (newTodo.trim() !== '') { 
      setTodo([...todo, newTodo]);
      setNewTodo('');
    }
  }

  function deleteData(index) {
    const DeleteInput = todo.filter((_, i) => i !== index);
    setTodo(DeleteInput);
  }

  return (
    <div>
      

      <form>
        <div>
          <input type="text"
            value={newTodo}
            onChange={Changeinput} />
        </div>
        <div>
          <button type='button' onClick={addTask}>Add</button>
        </div>

        <ol>
          {todo.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => deleteData(index)}>Del</button>
            </li>
          ))}
        </ol>
      </form>

    </div>
  );
};

export default Input_Data
