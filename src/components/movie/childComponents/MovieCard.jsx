import React from 'react';
// import MovieCardView from './MovieCardView'



const MovieCard = ({ movie, handleClick }) => {

    

    return (
        <div className='movie'
           onClick={handleClick}
        >
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placholder.com/400'}
                    alt={movie.Title}
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;