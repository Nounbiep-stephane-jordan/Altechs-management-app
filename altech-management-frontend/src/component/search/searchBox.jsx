import React from 'react'
import {FaSearch} from "react-icons/fa"


const SearchBox = ({onSearchChange}) => {
  return (
    <div className="table-input">
        <FaSearch className="search-icon"/>
        <input placeholder="Search" type="text" onChange={onSearchChange}/>
      </div>
  )
}

export default SearchBox