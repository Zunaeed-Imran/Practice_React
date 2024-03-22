import React from 'react'



const Country_Prop2 = (props) => {

  const { name, flags, capital, population, area } = props.country;

  const handleRemove = (name) => {
    props.onRemove(name);
  };


  return (
    <>
      <div>
        <img src={flags.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <h3>Area: {area}</h3>
      </div>
      <button onClick={() => {
        handleRemove(name.common);
      }}>
        Remove
      </button>
    </>
  );
};

export default Country_Prop2;
