import React from 'react'

import Child from './Child';

const State_lifting = () => {


  const practiceStateLift = (e) => {
    console.log(e);
  }


  return (
    <div>
      
      <Child onState={practiceStateLift} />
    </div>
  )
}

export default State_lifting;
