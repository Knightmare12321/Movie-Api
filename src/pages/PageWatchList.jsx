import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";
import { useSelector } from "react-redux";
import { isIn } from "../utils/isIn";
import MovieCard from "../components/MovieCard";

const PageWatchList = () => {
    const favs = useSelector((state) => state.fav.favs)
    const watchlists = useSelector((state) => state.watch.watchlists);
    console.log(watchlists);
    useEffect(() => {
        document.title = `${appTitle} - Watchlists`;
      }, []);

    return (
        <main className="main-fav-watch">
        <section>
        <h2>My Watchlists</h2>
        {watchlists == undefined || watchlists.length < 1 ? (
          <p>
            No movies in watchlists. Return to the <Link to="/">home</Link> page
            to add some movies to watch later!
          </p>
        ) : (
          <div className="movies-grid">
            {watchlists.map((obj, i) => {
              return (
                <MovieCard
                  key={i}
                  movie={obj}
                  isFav={isIn(obj.id, favs)}
                  isWatch={true}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
    )
}

export default PageWatchList;
