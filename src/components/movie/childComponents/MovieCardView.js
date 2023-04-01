import React from 'react'

const MovieCardView = ({movie}) => {
    // Poster:
    // "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    // Title
    // :
    // "Batman v Superman: Dawn of Justice"
    // Type
    // :
    // "movie"
    // Year
    // :
    // "2016"
    // imdbID
    // :
    // "tt2975590"
    return (
        <div>
            <p>{movie.Title}</p>
        </div>
    )
}

export default MovieCardView;