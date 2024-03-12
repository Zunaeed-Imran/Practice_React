import React, { useState } from 'react'
import { faqdata } from './Faq_Data';

const FAq2_Display = ({id, title, desc}) => {

  const [test2, setTest2] = useState();

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button onClick={()=>{setTest2(!test2)}}>
          {test2?"+":"-"}
        </button>
      </div>
      <div>
        {test2 && (
          <h6>{desc}</h6>
        )}
      </div>
    </div>
  )
}

export default FAq2_Display;
