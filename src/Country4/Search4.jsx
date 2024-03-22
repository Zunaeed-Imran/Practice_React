import React, { useEffect, useState } from 'react'



const Search4 = (props) => {


  const [search, setSearch] = useState('');


  useEffect(() => {
    props.onSearch(search);
  }, [search])

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder='Search'
        onChange={handleSearch} />
    </>
  )
}

export default Search4;
