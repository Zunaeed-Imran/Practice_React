import React, { useEffect, useState } from 'react';
import Display_Country from './Display_Country';
import Search1 from './Search1';

const url = 'https://restcountries.com/v3.1/all';

const COuntry_App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState(countries);

  const fetchData = async url => {
    setLoading(true);
    try {
      const response1 = await fetch(url);
      const data1 = await response1.json();
      setCountries(data1);
      setFilter(data1);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemove = name => {
    const filter1 = filter.filter(countries => countries.name.common !== name);
    setFilter(filter1);
  };

  const handleSearch = searchValue => {
    let value1 = searchValue.toLowerCase();
    const newCountry1 = countries.filter(country1 => {
      const countryName1 = country1.name.common.toLowerCase();
      return countryName1.startsWith(value1);
    });
    setFilter(newCountry1);
  };

  return (
    <>
      <h1>Country App</h1>
      <Search1 onSearch={handleSearch} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Display_Country countries={filter} onRemove={handleRemove} />
      )}
    </>
  );
};

export default COuntry_App;
