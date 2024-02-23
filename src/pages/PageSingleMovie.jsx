import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/fav/favSlice';
import SingleMovie from '../components/SingleMovie';
import { api } from '../globals/globals';
import { baseUrl } from '../globals/globals';
import { FaHeart, FaRegHeart, FaEye,FaPlus } from 'react-icons/fa';
import WatchButton from '../components/WatchButton';
import { addWatch, deleteWatch } from '../features/watchlist/watchlistSlice';

const PageIndividualMovie = () => {
    const { id } = useParams();
    const favs = useSelector((state) => state.fav.favs)
    const watchs = useSelector((state) => state.watch.watchlists)
    const dispatch = useDispatch()
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null);


    useEffect(() => {
        // Define the async function inside useEffect
        async function fetchData() {
          document.title = `${appTitle} - Individual Movie ${id}`;
          try {
            const url = `${baseUrl}${id}${api}&append_to_response=credits`;
            console.log(url);
            const response = await fetch(url);
            const movie = await response.json();
            console.log(movie);
            setMovie(movie);
          } catch (e) {
            setError(e);
          }
        }
      
        // Call the async function
        fetchData();
      }, []); // Dependency array
      

    function inFav(id, arr) {
        return arr.some(item => item.id == id)
    }
   function isWatched(id,arr) {
        
        return arr.some(item => item.id == id)
    }
    return (
        <main>
            <section className="singleMovie-main-section">
                {error ? <div>Error: {error.message}</div> :
                    <>
                        {movie ?
                            <div>
                                <div className="top-container">
                                    <h2>{movie.title}</h2>
                                </div>
                                <SingleMovie movie={movie} >
                                    {<div className='fav-button-container'>
                                        {inFav(id, favs) === true ?
                                            <FaHeart className="red-heart" onClick={() => dispatch(deleteFav(movie))} /> :
                                            <FaRegHeart className="white-heart" onClick={() => dispatch(addFav(movie))} />
                                        }

                                    </div>}
                                    {<div className='watch-button-container'>
                                        {isWatched(id,watchs) === true? 
                                            <FaEye className="eye" onClick={()=> dispatch(deleteWatch(movie))} /> :
                                            <FaPlus className="add-watch" onClick={() => dispatch(addWatch(movie))} />
                                        }
                                        
                                        
                                        </div>}
                                </SingleMovie>
                                <Link to="/" className="link-back-to-home">Back</Link>
                            </div> :
                            <div className="loading-sect">
                                <p className="loader">Loading..</p>
                            </div>
                        }
                    </>
                }
            </section>
        </main>
    );
}

export default PageIndividualMovie;