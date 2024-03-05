// Practice usestate hook.
// we use functional component 
// we don't need to constructor function like we use in calss component.

import React, { useState } from 'react'




const Usestate_hook = () => {

  const [count, setCount] = useState(0);


  const  inCrement = () => {
    setCount(count + 4);
  }



  return (
    <div>
      <h2>{count}</h2>
      <button onClick={inCrement}>Plus + 4</button>

    </div>
  )
}

export default Usestate_hook;
