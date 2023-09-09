import React from 'react';
import { useState, useEffect } from "react";
import moviesApi from '../../api/moviesApi';
import MovieTable from '../MovieTable/MovieTable';
import './MoviesList.css';

const MoviesList = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {
            moviesApi.getAllMovies().then( response => {
            setMovies(response.data);
            console.log(response.data);
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