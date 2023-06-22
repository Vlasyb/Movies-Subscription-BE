const Movie = require("../models/movieModel")

const getAllMovies = () => {
	return Movie.find({})
}

const getMovieById = (id) => {
	return Movie.findOne({ _id: id })
}
const addMovie = async (obj) => {
	const movie = new Movie(obj)
	await movie.save()
	return "Movie Created"
}

const updateMovie = async (id, obj) => {
	await Movie.findByIdAndUpdate(id, obj)
	return "Updated Movie"
}

const getMovieIdByName = async (givenName) => {
	const movie = await Movie.findOne({ name: givenName })
	return movie._id
}

module.exports = {
	getMovieIdByName,
	updateMovie,
	addMovie,
	getAllMovies,
	getMovieById,
}
