import React from 'react'

const Search = ({ onChange }) => (
  <input
    className="searchbox form-control input-lg"
    type="text"
    onChange={onChange}
    placeholder="Search a Recipe"
  />
)

export default Search
