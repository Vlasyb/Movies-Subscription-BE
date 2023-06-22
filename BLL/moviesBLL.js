const Movie = require("../models/movieModel")

const getAllMovies = () => {
	return Movie.find({})
}

module.exports = {
	getAllMovies,
}
