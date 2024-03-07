import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import New_todo from './New_todo';

const Todo_App = () => {

  // const { v4: uuidv4 } = require('uuid');

  const [testHome, setTesthome] = useState('');


  const addData = (testHome) => {
    setTesthome(testHome)
  }


  return (
    <div>
      <h2>{testHome}</h2>
      <New_todo onNewtodo={addData} />
    </div>
  )
}

export default Todo_App;
