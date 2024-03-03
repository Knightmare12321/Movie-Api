// Page - Home
import { useState, useEffect } from 'react';
import { appTitle } from '../globals/globals';
import FilterBar from '../components/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setUrl, setSelection, filterMovie, setSearchQuery } from '../features/movie/movieSlice';
import { api, baseUrl, baseImageUrl } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { isIn } from '../utils/isIn';
import { set } from 'immutable';




const PageHome = () => {
    const [error, setError] = useState(null);
    const movies = useSelector((state) => state.movie.movies)
    const selection = useSelector((state) => state.movie.selection)
    const url = useSelector((state) => state.movie.url)
    const value = useSelector((state) => state.movie.value)
    const filteredMovies = useSelector((state) => state.movie.filteredMovies)
    const favs = useSelector((state) => state.fav.favs)
    const watchlists = useSelector((state) => state.watch.watchlists)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(url)
            const responseJson = await response.json()
            const movies = responseJson.results.slice(0, 20)
            dispatch(getMovies(movies))
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [url]);





    function sort(e) {
        dispatch(setSelection(encodeURIComponent(e.target.value)))
        dispatch(setUrl(baseUrl + e.target.value + api))

    }
    // Define a state for the input value
    const [inputValue, setInputValue] = useState("");

    // Handler for input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Modify the search function to use the state value
    function search() {
        const url = `https://api.themoviedb.org/3/search/movie${api}&query=${encodeURIComponent(inputValue)}`;
        dispatch(setUrl(url));
    }

    function createForm() {
        return (
            <div className="select-container">
                <label htmlFor="displays">Sort: </label>
                <select className="select-input" name="displays" id="displays" value={selection} onChange={sort} >
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="now_playing">Now Playing</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>
        )
    }

    function cancelfiltering() {
        dispatch(filterMovie(""))
    }

    return (
        <main>
            <section className="home-main-section">
                {error ? <div>Error: {error.message}</div> :
                    <div>
                        <div className="bar-container">
                            {createForm()}
                            <FilterBar
                            placeholder="search by title"
                            onClick={search}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        </div>
                       

                        {movies.length < 1 ?
                            <div className="loading-sect">
                                <p className="loader">No Result.</p>
                            </div> :
                            <div className="movies-grid">
                                {movies.map(movie =>
                                    <MovieCard key={movie.id} movie={movie} isFav={isIn(movie.id, favs)} isWatch={isIn(movie.id, watchlists)}>

                                    </MovieCard>)
                                }
                            </div>
                        }
                    </div>
                }
            </section>
        </main>
    );

};

export default PageHome;
// Path: src/pages/PageNotFound.jsx