const Movie = require("../models/movieModel")
const Subscription = require("../models/subscriptionModel")

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

const getNonWatchedMoviesForMember = async (memberId) => {
	const subscription = await Subscription.findOne({ memberId: memberId })
	const movieIds = subscription.movies.map((movie) => {
		return movie.movieId.toString()
	})

	console.log(movieIds)
	const moviesResult = await Movie.find({ _id: { $nin: movieIds } })
	return moviesResult
}

module.exports = {
	getNonWatchedMoviesForMember,
	getMovieIdByName,
	updateMovie,
	addMovie,
	getAllMovies,
	getMovieById,
}
