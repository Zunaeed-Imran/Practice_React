import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Country_Prop2 from './Country_Prop2';


const Display2 = (props) => {


  return (
    <>
      <section>

        {props.country.map(country => {
          const newCountry = { country, id: uuidv4() };
          return (
            <Country_Prop2/>
          )
        })}


      </section> 
    </>
  )
}

export default Display2
