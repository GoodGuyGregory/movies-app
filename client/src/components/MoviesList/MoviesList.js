import React from 'react';
import { useState, useEffect } from "react";
import moviesApi from '../../api/moviesApi';
import './MoviesList.css';

const MoviesList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const foundRes = await moviesApi.getAllMovies();
        })();
    }, []);

    return (
        <>
            <h1>This is the Movie List Page...</h1>
        </>
    );

}

export default MoviesList;