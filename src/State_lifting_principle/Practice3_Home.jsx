import React, { useState } from 'react'
import Practice3_New_todo from './Practice3_New_todo'

const Practice3_Home = () => {

  const [tes3, setTes3] = useState('');

  const handlePracticeTest = (tes3) => {
    setTes3(tes3);
  }


  return (
    <div>
      <h2>{tes3}</h2>
      <Practice3_New_todo onGoing={handlePracticeTest} />
    </div>
  )
}

export default Practice3_Home
