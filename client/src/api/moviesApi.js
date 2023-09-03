import axios from 'axios';



export const insertMovie = payload => axios.post(`/movie`, payload);
export const getAllMovies = () => { axios.get(`/api/movies`)};
export const updateMovieById = (id, payload) => axios.put(`/movie/${id}`, payload);
export const deleteMovieById = id => axios.delete(`/movie/${id}`);
export const getMovieById = id => axios.get(`/movie/${id}`);

const moviesApi
 = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default moviesApi