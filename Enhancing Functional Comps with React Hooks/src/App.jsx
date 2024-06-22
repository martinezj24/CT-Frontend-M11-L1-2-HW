import React from 'react';
import MoviesList from './MoviesList'; // Assuming MoviesList.jsx is in src/components/

const App = () => {
    return (
        <div>
            <h1>My Favorite Movies</h1>
            <hr />
            <MoviesList />
        </div>
    );
};

export default App;
