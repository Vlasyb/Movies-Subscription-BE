const Subscription = require("../models/subscriptionModel")
const Member = require("../models/memberModel")
const Movie = require("../models/movieModel")

const getAllSubscriptions = () => {
	return Subscription.find({})
}

const getSubscriptionById = (id) => {
	return Subscription.findOne({ _id: id })
}

const subscribeToMovie = async (memberId, movieId, date) => {
	const subscription = await Subscription.findOne({
		memberId: memberId,
		"movies.movieId": movieId,
	})
	console.log(subscription)
	if (subscription != null) {
		return "Subscription already exists"
	}
	const nonStrDate = stringDateToTypeDate(date)
	await Subscription.findOneAndUpdate(
		{ memberId: memberId, "movies.movieId": { $ne: movieId } },
		{ $addToSet: { movies: { movieId: movieId, date: nonStrDate } } },
		{ upsert: true } //if it doesnt exist creates new
	)
	return "Member Subscribed"
}

const getSubscriptionsForMember = async (memberId) => {
	const subscriptions = await Subscription.find({ memberId: memberId })
	return subscriptions
}

const getSubscriptionsForMovieId = async (movieId) => {
	const subscriptions = await Subscription.find({ "movies.movieId": movieId })
	const membersWatched = subscriptions.map((subscription) => {
		const watchedMovie = subscription.movies.find(
			(movie) => movieId === movie.movieId.toString()
		)
		return [subscription.memberId.toString(), watchedMovie.date]
	})
	console.log(membersWatched)
	return membersWatched
}

const stringDateToTypeDate = (dateString) => {
	const parts = dateString.split("/")
	const day = parseInt(parts[0], 10) + 1 // maybe need to remove the +1
	const month = parseInt(parts[1], 10) - 1 // Extract month as integer (subtract 1 as months are zero-based in JavaScript)
	const year = parseInt(parts[2], 10)

	return new Date(year, month, day) // Create Date object
}

module.exports = {
	getSubscriptionsForMovieId,
	getSubscriptionsForMember,
	subscribeToMovie,
	getAllSubscriptions,
	getSubscriptionById,
}
