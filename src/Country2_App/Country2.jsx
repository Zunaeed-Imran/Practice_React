import React, { useEffect, useState } from 'react'
import Display2 from './Display2';
import Search2 from './Search2';



const url = 'https://restcountries.com/v3.1/all';

// main function start from here.
const Country2 = () => {


  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(country);
  const [error, setError] = useState(null);


  const fetchinThadata = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      setFilter(data);
      setLoading(false);
      setError(null);

    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchinThadata(url);
  }, []);

  const handleRemove = (name) => {
    const filterRemoveData = filter.filter(country => country.name.common !== name);
    setFilter(filterRemoveData);
  };

  const handleSearch = (searchVal) => {
    let val = searchVal.toLowerCase();
    const newCountry = country.filter(countryserch => {
      const countryresult = countryserch.name.common.toLowerCase();
      return countryresult.startsWith(val);
    });
    setFilter(newCountry);
  }


  return (
    <>
      <h1>Country App</h1>
      <Search2 onSearch={handleSearch} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {country && (
        <Display2 country={filter} onRemove={handleRemove} />
      )}
    </>
  )
}

export default Country2
