import React, {useState} from 'react'



const New_todos = (props) => {


  const [todo, setTodo] = useState('');


  const handleName = (e) => {
    setTodo(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(todo)
  }


  return (
    <div>
      <form>
        <div>
          <input type="text" name="name" placeholder='Name' value={todo} onChange={handleName}/>
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default New_todos;
