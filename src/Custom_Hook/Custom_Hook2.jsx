import React from 'react'
import customEffect2 from './customEffect2'

const Custom_Hook2 = () => {

  const { data2, loading2, error2 } = customEffect2(
    'https://jsonplaceholder.typicode.com/todo'
  );

  const loadingMassege2 = <p>Data is loading</p>;
  const errorMassege2 = <p>Error From API</p>;
  const DisplayMassege2 = data2 && data2.map((data2) => {
    return <p key={data2.id}>{data2.title}</p>
  })


  return (
    <>
      <h1>Practice Three Todo</h1>
      {loading2 && loadingMassege2}
      {error2 && errorMassege2}
      {DisplayMassege2}
    </>
  )
}

export default Custom_Hook2
