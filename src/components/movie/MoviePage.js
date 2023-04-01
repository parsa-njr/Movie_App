import React from 'react'
import MovieCard from './childComponents/MovieCard';
import MovieCardView from './childComponents/MovieCardView';


const MoviePage = ({movies, handleClick, mainPage}) => {
    return(
        <>
         {
        movies?.length > 0
          ? (

            < div className="container" >
              
                {movies.map((movie, movieIndex) => (
                  mainPage ?
                  <MovieCard
                    key={movieIndex}
                    movie={movie}
                    handleClick={handleClick}
                  />
                  : <MovieCardView
                    movie={movie}
                    movieIndex={movieIndex}
                  />

                ))}
              
            </div>
           
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }

        </>
    )
}

export default MoviePage;