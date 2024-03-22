import React, { useEffect, useState } from 'react'

const Search3 = (props) => {

  const [search, setSearch] = useState('');

  useEffect(() => {
    props.onSearch(search);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }


  return (
    <>
      <input
        type="text"
        placeholder='Search'
        onChange={handleSearch}
        value={search} />
    </>
  )
}

export default Search3;
