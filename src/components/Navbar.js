import React from 'react'
import SearchIcon from '../search.svg'


const MovieNavbar = ({searchTerm, setSearchTerm, searchMovie}) => {
  return (
    <>
      
        <h1>Movie Land</h1>



        <div className='search'>
          <input
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovie(searchTerm)}
          />
        </div>
      
    </>
  )
}

export default MovieNavbar;