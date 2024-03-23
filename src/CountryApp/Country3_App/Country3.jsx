import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import Data3 from './Data3';

const Country3 = props => {
  return (
    <>
      <section>{props.countrys.map(country => {
        const newCountry = { country, id: uuidv4() };
        return (
          <Data3
            {...newCountry}
            key={newCountry.id}
            onRemove={props.onRemove} />
        );
      })}</section>
    </>
  );
};

export default Country3;
