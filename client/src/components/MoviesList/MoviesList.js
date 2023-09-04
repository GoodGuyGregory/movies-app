import React from 'react';
import { useMemo,useState, useEffect } from "react";
import moviesApi from '../../api/moviesApi';
import MovieTable from '../MovieTable/MovieTable';
import './MoviesList.css';

const MoviesList = () => {

    const [movies, setMovies] = useState({});

    useEffect(() => {
        (async () => {
            let foundMovies = await moviesApi.getAllMovies();
            setMovies(foundMovies);
        })();
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