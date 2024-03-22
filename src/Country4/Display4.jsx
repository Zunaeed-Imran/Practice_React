import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Data4 from './Data4';



const Display4 = (props) => {



  return (
    <>
      <section>
        {props.country.map(country => {
          const newCountry = { country, id: uuidv4() };
          return (
            <Data4
              {...country}
              key={newCountry.id}
              onRemove={props.onRemove} />
          );
        })}
      </section>
    </>
  )
}

export default Display4;
