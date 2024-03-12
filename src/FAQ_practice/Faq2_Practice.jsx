import React, { useState } from 'react'
import { faqdata } from './Faq_Data';


const Faq2_Practice = () => {

  const [faq, setFaq] = useState(faqdata);

  return (
    <div>
      {faq.map(faq => <Faq2_Practice key={faq.id} {...faq} />)}
    </div>
  )
}

export default Faq2_Practice;
