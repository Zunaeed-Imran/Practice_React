import React from 'react'
import Child3 from './Child3';

const Parent3 = () => {


  const handleParent = (e) => {
    console.log(e)
  }

  return (
    <div>
      <Child3 onText={handleParent} />
    </div>
  )
}

export default Parent3;

