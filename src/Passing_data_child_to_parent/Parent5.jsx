import React from 'react'
import Child5 from './Child5';

const Parent5 = () => {

  const handleTry5 = (e) => {
    alert(e);
  }


  return (
    <div>
      <Child5 onTry5={handleTry5} />
    </div>
  )
}

export default Parent5;
