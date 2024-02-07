import React, { useState, useEffect } from 'react';
import '../styles/style.scss';
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=e58b9005de2ae66c8af27c9c2846ee65')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div className='movieblocks'   key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
         
        </div>
      ))}
    </div>
  );
};

export default MovieList;
