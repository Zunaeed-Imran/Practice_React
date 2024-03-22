import React from 'react'



const Data4 = (props) => {

  const { name, falgs, capital, population, area } = props.country;

  const handleRemove = (remove) => {
    props.onRemove4(remove);
  }

  return (
    <>
      <div>
        <img src={falgs.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <h3>Area: {area}</h3>
      </div>
      <div>
        <button onClick={() => {
          handleRemove(name.common)
        }}>
          Remove
        </button>
      </div>
    </>
  )
}

export default Data4;
