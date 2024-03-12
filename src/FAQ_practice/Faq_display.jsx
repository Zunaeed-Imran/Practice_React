import React, { useState } from 'react'

const Faq_display = ({ id, title, desc }) => {
  
  const [practice, setParactice] = useState();

  return (
    <div>
      <div>
      <h4>{title}</h4>
      <button onClick={()=>{setParactice(!practice)}}>
         {practice? "-" : "+"}
      </button>
      </div>
      <div>
        {practice && (
          <p>{desc}</p>
        )}
      </div>
    </div>
  )
}

export default Faq_display;
