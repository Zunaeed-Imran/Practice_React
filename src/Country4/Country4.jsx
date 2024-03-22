import React, { useEffect, useState } from 'react'
import Display4 from './Display4';
import Search4 from './Search4';


const url4 = 'https://restcountries.com/v3.1/all';

const Country4 = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const [filerCountry, setFilterCountry] = useState(country);


  const fetchData = async (url4) => {
    setLoading(true);
    try {
      const response = fetch(url4);
      const data = await response.json();
      setCountry(data);
      setFilterCountry(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }


  useEffect(() => {
    fetchData(url4);
  }, [])


  const handleRemove = (remove) => {
    const removeFilter = filerCountry.filter(country => country.name.common !== remove);
    setFilterCountry(removeFilter);
  }

  const handleSearch = (value) => {
    let searchValue = value.toLowerCase();
    const newSearch = country.filter(search4 => {
      const result = search4.name.common.toLowerCase();
      return result.startsWith(searchValue);
    });
    setFilterCountry(newSearch);
  }

  return (
    <>
      <h1>Country App</h1>
      <Search4 onSearch={handleSearch} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <Display4 country={filerCountry} onRemove={handleRemove} />
    </>
  );
}

export default Country4;
