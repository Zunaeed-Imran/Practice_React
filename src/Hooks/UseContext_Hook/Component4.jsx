import React, { useContext } from 'react';
import { UserContext1 } from './UseContext';

const Component4 = () => {
  const { name, desc } = useContext(UserContext1);

  return (
    <>
      <h2>{name.name1}</h2>
      <h2>{name.id}</h2>
      <h3>{desc}</h3>
    </>
  );
};

export default Component4;
