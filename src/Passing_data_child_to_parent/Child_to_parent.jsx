import React from 'react'
import Child2 from './Child2'

const Child_to_parent = () => {

  const handleChild = (cData) => {
    console.log("App: " + cData);
  }

  return (
    <div>
      <Child2 dataChild={handleChild} />
    </div>
  )
}

export default Child_to_parent;
