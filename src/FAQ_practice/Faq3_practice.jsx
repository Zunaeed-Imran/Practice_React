import React, { useState } from 'react'
import { faqdata } from './Faq_Data';
import Faq3_display from './Faq3_display';


const Faq3_practice = () => {
  const [test3, setTest3] = useState(faqdata);

  return (
    <div>
      {test3.map(test3 => <Faq3_display key={test3.id} {...test3} />)}
    </div>
  )
}

export default Faq3_practice;
