// Another Practice of useState() Hook using functional component.


import React, { useState } from 'react'

export default function Usestatehook3() {


  const [timeChange, setTimechange] = useState(12);

  const anotherTry = () => {
    setTimechange(timeChange + 100);
  }



  return (
    <div>
      <h4>3rd Time Practice</h4>
      <h1>{timeChange}</h1>
      <button onClick={anotherTry}>Add + 100</button>
    </div>
  )
}
