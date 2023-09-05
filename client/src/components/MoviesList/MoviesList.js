import React from 'react';
import { useState, useEffect } from "react";
import moviesApi from '../../api/moviesApi';
import MovieTable from '../MovieTable/MovieTable';
import './MoviesList.css';

const MoviesList = () => {

    const [movies, setMovies] = useState({Movies: []});

    useEffect(() => {
            moviesApi.getAllMovies().then( movies => {
            setMovies(movies);
        })
    }, []);

    return (
        <>
        <div class="movies">
            <MovieTable movies={movies}/>
        </div>

        </>
    );

}

export default MoviesList;