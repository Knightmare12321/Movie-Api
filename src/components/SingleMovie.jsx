import React from 'react'
import noPoster from "../images/no-movie-poster.jpg";
import { baseImageUrl } from "../globals/globals";
import { AiFillStar } from 'react-icons/ai';

function SingleMovie({ movie, children }) {

    const getCrewInfo = (position) => {
        const results = movie.credits.crew.filter(
            (person) => person.job === position
        );
        //console.log(results);
        if (results.length === 0) {
            return <p>{position} coming soon...</p>;
        }

        const resultRender = results.map((result, i) => (
            <p key={i} className="crew">
                {result.name}
            </p>
        ));

        return resultRender;
    };

    const getTimes = (pureMintues) => {
        const hours = Math.floor(pureMintues / 60);
        const minutes = pureMintues % 60;
        return hours + 'h ' + minutes + 'm';
    };

    return (
        <div className="single-movie">
            <div className="single-movie-main-grid">
                <div className="single-movie-poster">
                    {!movie.poster_path ? (
                        <img src={noPoster} alt="no poster" />
                    ) : (
                        <img src={baseImageUrl + movie.poster_path}
                            alt={`poster of ${movie.title}`}
                        />
                    )}
                </div>
                <div className="single-movie-overview-info">
                    <h2>{movie.title}</h2>
                    <div className="sub-icon-group">
                        <div className="timing-info">
                            <p>{movie.release_date}</p>
                            <p>{getTimes(movie.runtime)}</p>
                        </div>
                        <div className="voteAndFav-info">
                            <div className="single-movie-score">
                                <AiFillStar className='star' />
                                <p className="rating-score">
                                    {movie.vote_average.toFixed(1)}
                                </p>
                            </div>
                        </div>
                        {children}
                    </div>
                    <h3>Overview</h3>
                    {movie.overview ? (
                        <p className="single-overview-text">{movie.overview}</p>
                    ) : (
                        <p className="single-overview-text">Overview coming soon...</p>
                    )}

                    <div className="other-info">
                        <div className="genre-info">
                            <h3>Genre</h3>
                            <div className="genre-list">
                                {movie.genres ? (
                                    movie.genres.map((genre, i) => <p key={i}>{genre.name}</p>)
                                ) : (
                                    <p>Genre coming soon...</p>
                                )}
                            </div>
                        </div>
                        <div className="director-info">
                            <h3>Director</h3>
                            {movie.credits.crew && getCrewInfo('Director')}
                        </div>
                        <div className="producer-info">
                            <h3>Producer</h3>
                            {movie.credits.crew && getCrewInfo('Producer')}
                        </div>
                        <div className="character-info">
                            <h3>Characters</h3>
                            {movie.credits.crew && getCrewInfo('Characters')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie