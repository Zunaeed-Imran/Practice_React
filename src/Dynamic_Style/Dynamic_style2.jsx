import React, { useEffect, useState } from 'react'



const Dynamic_style2 = () => {

  const [name, setName] = useState();
  const [validpractice, setValid] = useState(true);


  useEffect(() => {
    if (name && name.length <= 3) {
      setValid(false)
    } else {
      setValid(true)
    }
  }, [name])

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <h1> Name:
        <input
          type="text"
          onChange={handleChange}
          value={name}
          style={{ backgroundColor: validpractice ? "green" : "red"
      }}/></h1>
    </div>
  )
}

export default Dynamic_style2;
