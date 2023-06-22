const Movie = require("../models/movieModel")

const getAllMovies = () => {
	return Movie.find({})
}

const getMovieById = (id) => {
	return Movie.findOne({ _id: id })
}

module.exports = {
	getAllMovies,
	getMovieById,
}
