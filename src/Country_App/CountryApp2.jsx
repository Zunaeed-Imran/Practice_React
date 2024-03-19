import React, { useEffect, useState } from 'react'



const url = 'https://restcountries.com/v3.1/all';


const CountryApp2 = () => {

  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);
  const [country2, setCountry2] = useState([]);
  const [filter2, setFilter2] = useState(country2);


  const fetchData2 = async (url) => {
    setLoading2(true)
    try {
      const res2 = await fetch(url);
    } catch (error) {
      
    }
  }


  useEffect(() => {
    
  },[])




  return (
    <>
      <h1>Country App</h1>

    </>
  )
}

export default CountryApp2;
