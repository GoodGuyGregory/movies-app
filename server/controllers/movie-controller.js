const Movie = require('../models/movie-model');

createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    let updateMovie = await Movie.findOne({ _id: req.params.id }); 

    if (!updateMovie) {
            return res.status(404).json({
                error,
                message: 'Movie not updated!',
            })
    }

    else {
        updateMovie.name = body.name
        updateMovie.time = body.time
        updateMovie.rating = body.rating
        updateMovie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: updateMovie._id,
                    message: 'Movie updated!',
                })
            });
        
    } 
}

deleteMovie = async (req, res) => {
    
    try {
        await Movie.deleteOne({ _id: req.params.id }).then(function(){
            console.log("Movie deleted");
            return res.status(204); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });
      
    } catch {
        return res
        .status(500)
        .json({ success: false, error: `Movie not found` });
    } 

}

getMovieById = async (req, res) => {
    const foundMovie = await Movie.findOne({ _id: req.params.id });
        if (!foundMovie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: foundMovie });
}


getMovies = async (req, res) => {
    try {
        const foundMovies = await Movie.find();
        return res.send(foundMovies);
    } catch {
        return res.status(500).json({sucess: false, error: `error `});
    }

}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}