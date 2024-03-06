import React from 'react'

const Child = (props) => {
  return (
    <div>
      <p>
      i am from child
      </p>
      <p>
        {props.anyName}
      </p>
    </div>
  )
}

export default Child;
