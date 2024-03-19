import React from 'react';

const Dynamic_Style_1 = () => {

  const prac1=(false);

  return (
    <>
      <h1 style={{
        color: prac1 ? "red" : "green"
      }}>Hello form Dynamic Style practice one</h1>
    </>
  );
};

export default Dynamic_Style_1;
