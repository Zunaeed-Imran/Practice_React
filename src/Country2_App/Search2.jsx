import React, { useEffect, useState } from 'react'



const Search2 = (props) => {

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
        value={search}
        onChange={handleSearch}
      />
    </>
  );
};

export default Search2;
