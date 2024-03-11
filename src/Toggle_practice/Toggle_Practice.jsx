

import React, { useState } from 'react'

const Toggle_Practice = () => {

  const [toggle, setToggle] = useState();

  return (
    <div>
      {toggle && (
        <h2>Hello From Toggle</h2>
      )}
      <button type='submit' onClick={()=> {setToggle(!toggle)}}>
        {toggle? "Show" : "Hide"}
      </button>
    </div>
  )
}

export default Toggle_Practice
