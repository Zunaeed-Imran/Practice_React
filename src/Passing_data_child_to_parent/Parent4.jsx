import React from 'react'
import Child4 from './Child4'

const Parent4 = () => {

  const childParent = (e) => {
    console.log(e);
  }

  return (
    <div>
      <Child4 onChild={childParent} />
    </div>
  )
}

export default Parent4;
