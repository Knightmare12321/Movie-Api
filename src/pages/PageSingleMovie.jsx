import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/fav/favSlice';
import SingleMovie from '../components/SingleMovie';
import { api } from '../globals/globals';
import { baseUrl } from '../globals/globals';
import { FaHeart} from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const PageIndividualMovie = () => {
    const { id } = useParams();
    const favs = useSelector((state) => state.fav.favs)
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