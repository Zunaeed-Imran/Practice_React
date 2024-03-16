import React from 'react'
import customEffect1 from './customEffect1';




const Custom_hook1 = () => {

  const { data1, isloading1, error1 } = customEffect1(
    'https://jsonplaceholder.typicode.com/todos'
  ); 


  const loadingMessage1 = <p>Loading from API</p>;
  const errorMessage1 = <p>Error the Fetch Check Please</p>;

  const displayMassege1 = data1 && data1.map((data1) => {
    return <p key={data1.id}>{data1.title}</p>
  });

  return (
    <>
      <h1>Todo Practice One</h1>
      {isloading1 && loadingMessage1}
      {error1 && errorMessage1}
      {displayMassege1}
    </>
  )
}

export default Custom_hook1;
