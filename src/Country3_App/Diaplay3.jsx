import React, { useEffect, useState } from 'react'
import Search3 from './Search3';
import Country3 from './Country3';




const Diaplay3 = () => {

  const url = 'https://restcountries.com/v3.1/all';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countrys, setCountrys] = useState([]);
  const [filterCountry, setFilterCountry] = useState(countrys);

  const fetching = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountrys(data);
      setFilterCountry(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetching(url);
  }, []);

  const handleRemove = (name) => {
    const RemoveCountry = filterCountry.filter(countrys => countrys.name.common !== name);
    setFilterCountry(RemoveCountry);
  }

  const handleSearch = (e) => {
    let value3 = e.toLowerCase();
    const newSearch = countrys.filter(searchCountry => {
      const countryResult = searchCountry.name.common.toLowerCase();
      return countryResult.startsWith(value3);
    });
    setFilterCountry(newSearch); 
  }

  return (
    <>
      <h1>Country App</h1>
      <Search3 onSearch={handleSearch} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countrys && <Country3 countrys={filterCountry} onRemove={handleRemove} />}
    </>
  );
}

export default Diaplay3;
