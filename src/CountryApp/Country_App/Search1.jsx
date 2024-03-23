import React, { useEffect, useState } from 'react';

const Search1 = props => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    props.onSearch(search);
  }, [search]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={handleSearch}
      />
    </>
  );
};

export default Search1;
