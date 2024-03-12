import React, { useState } from 'react'
import { faqdata } from './Faq_Data'
import Faq_display from './Faq_display'




const FAQ_Practice = () => {

  const [toggle, setToggle] = useState(faqdata);


  return (
    <div>

      {toggle.map(toggle => <Faq_display key={toggle.id} {...toggle} />)}
      
    </div>
  )
}

export default FAQ_Practice;
