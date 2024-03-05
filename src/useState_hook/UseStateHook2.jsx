// another time practice useState hook Increment App

import React, { useState } from 'react'

const UseStateHook2 = () => {


  const [ccc, setCcc] = useState(5);

  const hanDle = () => {
    setCcc(ccc + 9);
  }

  return (
    <div>
      <h1>{ccc}</h1>
      <button onClick={hanDle}>Add + 9</button>
    </div>
  )
}

export default UseStateHook2;
