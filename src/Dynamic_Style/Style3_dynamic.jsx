import React, { useEffect, useState } from 'react'

const Style3_dynamic = () => {


  const [name, setName] = useState();
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (name && name.length < 3) {
      setValid(false);
    } else {
      setValid(true)
    }
  })

  const handleColor = (e) => {
    setName(e.target.value);
  }


  return (
    <>
      <h1>
        Hello:
        <input
          type="text"
          name=""
          id=""
          placeholder='Enter Name'
          onChange={handleColor}
          value={name}
          style={{
            color: valid ? "green" : "red"
          }}

        />
      </h1>
    </>
  )
}

export default Style3_dynamic;
