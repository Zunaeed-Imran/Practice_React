import React, { useState } from 'react'

const Faq3_display = (id, title, desc) => {

  const [testing3, steTesting3] = useState();
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button onClick={()=> {steTesting3(!testing3)}}>
          {testing3?"+":"-"}
        </button>
      </div>
      <div>
        {testing3 && (
          <h6>{desc}</h6>
        )}
      </div>
    </div>
  )
}

export default Faq3_display;
