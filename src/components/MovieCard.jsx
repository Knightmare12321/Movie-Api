import noPoster from "../images/no-movie-poster.jpg";
import FavButton from "./FavButton";
import { baseImageUrl } from "../globals/globals";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/fav/favSlice";

function MovieCard({ movie, children, isFav}) {
  const dispatch = useDispatch();
  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      console.log(obj);
      dispatch(addFav(obj));
    } else {
      dispatch(deleteFav(obj));
    }
  }

  return (
    <div className="single-movie-card">
      <div className="movie-card-content">
        <div className="poster-wrapper">
          {!movie.poster_path ? (
            <img src={noPoster} alt="no poster" />
          ) : (
            <img src={baseImageUrl + movie.poster_path}
              alt={`poster of ${movie.title}`}
            />
          )}
          <p className="rating-score">
            {movie.vote_average.toFixed(1)}
          </p>
          {children}
          <div className="poster-overlay">
            <p className="hover-release-date">
              Release Date: <br />
              {movie.release_date ? movie.release_date : 'N/A'}
            </p>
            {movie.overview.length === 0 ? (
              <p className="hover-movie-overview">
                Currently don't have an overview yet... Stay tune!
              </p>
            ) : movie.overview.length < 160 ? (
              <p className="hover-movie-overview">{movie.overview}</p>
            ) : (
              <p className="hover-movie-overview">
                {movie.overview.substring(0, 160)}...
              </p>
            )}
            <Link to={`/movie/${movie.id}`}>More Info</Link>
          </div>
 
        </div>
        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <div className="btn-favorite">
          { isFav? 
          <FavButton characterObj={movie} remove={isFav} handleFavClick={handleFavClick}/> :
          <FavButton characterObj={movie} handleFavClick={handleFavClick}/> }
        </div>
        
      </div>
    </div>
  );
};


export default MovieCard
