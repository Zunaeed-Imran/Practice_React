import React, { useState } from 'react'

const Practice_toggle2 = () => {

  const [toggle2, ToggleSet] = useState();


  return (
    <div>
      {toggle2 && (
        <h2>Hello From 4th Time Practice</h2>
      )}

      <button onClick={()=>{ToggleSet(!toggle2)}}>
        {toggle2? "Show" : "Hide"}
      </button>
    </div>
  )
}

export default Practice_toggle2;
