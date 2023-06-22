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

const updateMember = async (id, obj) => {
	await Member.findByIdAndUpdate(id, obj)
	return "Updated Member"
}

module.exports = {
	updateMember,
	addMovie,
	getAllMovies,
	getMovieById,
}
