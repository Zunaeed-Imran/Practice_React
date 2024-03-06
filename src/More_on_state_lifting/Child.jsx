import React from 'react'

const Child = (props) => {

  props.onState({title: "This state lifting practice data pass child to parent"});


  return (
    <div>
      
    </div>
  )
}

export default Child;
