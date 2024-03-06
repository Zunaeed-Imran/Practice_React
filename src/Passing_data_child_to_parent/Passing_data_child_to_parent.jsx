import React from 'react'

import Child from './Child'

const Passing_data_child_to_parent = () => {

  const text = "i am form parent";

  return (
    <div>
      <Child anyName={text} />
    </div>
  )
}

export default Passing_data_child_to_parent
