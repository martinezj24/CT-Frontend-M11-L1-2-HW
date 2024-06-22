import React, { useState } from "react";

const MoviesList = () => {
    // Task 1: Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { id: 1, title: 'Dune 2', genre: 'Sci-Fi', description: 'Part 2 of the Dune Series', image: 'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg' },
        { id: 2, title: 'John Wick', genre: 'Action', description: 'Keanu Reeves stars in this one (you shouldnt mess with his dog)', image: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg' },
        { id: 3, title: 'The Blind', genre: 'Drama', description: 'Faith-based drama, how a father found redemption and began a dynasty', image: 'https://m.media-amazon.com/images/M/MV5BN2FhYjY5ZjYtMTAzMi00ODRlLThjNWMtZTU3NmVhMmM2Njk1XkEyXkFqcGdeQXVyMjg5MjgzNTA@._V1_.jpg' },
        { id: 4, title: 'Fireproof', genre: 'Romance', description: "Faith-based romance, A marriage repaired through love & God's guidance", image: 'https://m.media-amazon.com/images/I/71t2rkZ0n7L._AC_UF1000,1000_QL80_.jpg'}
    ]);

    // Task 2: Implement toggle for displaying movie details
    const [detailsVisible, setDetailsVisible] = useState({});

    const toggleDetails = (id) => {
        setDetailsVisible({
            ...detailsVisible,
            [id]: !detailsVisible[id]
        });
    };

    // Task 3: Implement function to remove a movie
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    // Task 4: Implement toggle for displaying all movies or by genre
    const [showAllMovies, setShowAllMovies] = useState(true);

    const toggleView = () => {
        setShowAllMovies(!showAllMovies);
    };

    return (
        <div>
            {/* Task 4: Toggle view button */}
            <button onClick={toggleView}>
                {showAllMovies ? 'Show Action Movies' : 'Show All Movies'}
            </button>

            <ul>
                {/* Task 2 & 4: Map through the movies and display them */}
                {movies.map(movie => (
                    (showAllMovies || movie.genre === 'Action') &&
                    <li key={movie.id}>
                        <h3 onClick={() => toggleDetails(movie.id)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </h3>
                        <img src={movie.image} alt={movie.title} style={{ maxWidth: '400px', maxHeight: '450px' }} />
                        {detailsVisible[movie.id] &&
                            <p>{movie.description}</p>
                        }
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;