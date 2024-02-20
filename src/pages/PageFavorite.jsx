import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const PageFavorite = () => {
    const favs = useSelector((state) => state.fav.favs);
    console.log(favs);
    useEffect(() => {
        document.title = `${appTitle} - Favorites`;
      }, []);

    return (
        <main>
        <section>
        <h2>My Favourites</h2>
        {favs == undefined || favs.length < 1 ? (
          <p>
            No favourite movies. Return to the <Link to="/">home</Link> page
            to add some favourite characters.
          </p>
        ) : (
          <div className="movies-grid">
            {favs.map((obj, i) => {
              return (
                <MovieCard
                  key={i}
                  movie={obj}
                  isFav={true}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
    )
}

export default PageFavorite;