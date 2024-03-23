import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import Country_data from './Country_data';

const Display_Country = props => {
  return (
    <>
      <section>
        {props.countries.map(country => {
          const newCountry = { country, id: uuidv4() };

          return (
            <Country_data
              {...newCountry}
              key={newCountry.id}
              onRemove={props.onRemove}
            />
          );
        })}
      </section>
    </>
  );
};

export default Display_Country;
