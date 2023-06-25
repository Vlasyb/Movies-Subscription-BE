const express = require("express")
const subscriptionsBLL = require("../BLL/subscriptionsBLL")

const router = express.Router()

router.get("/", async (req, res) => {
	try {
		const subscriptions = await subscriptionsBLL.getAllSubscriptions()
		res.status(200).json(subscriptions)
	} catch (error) {
		console.log("error: ", error)
		res.status(500).send(error.message)
	}
})

router.get("/subscription/:id", async (req, res) => {
	try {
		const { id } = req.params
		const subscription = await subscriptionsBLL.getSubscriptionById(id)
		res.status(200).json(subscription)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})
//get all subscriptions for memberId
router.get("/subscriptions/:memberId", async (req, res) => {
	try {
		const { memberId } = req.params
		const subscriptions = await subscriptionsBLL.getSubscriptionsForMember(
			memberId
		)
		res.status(200).json(subscriptions)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})
//get all members watched + date for a movie
router.get("/membersWatched/:movieId", async (req, res) => {
	try {
		const { movieId } = req.params
		const membersWatched = await subscriptionsBLL.getSubscriptionsForMovieId(
			movieId
		)
		res.status(200).json(membersWatched)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})
//subscribe a member to movie
router.put("/subscribe/:movieId", async (req, res) => {
	try {
		const { movieId } = req.params
		const { memberId, date } = req.body
		result = await subscriptionsBLL.subscribeToMovie(memberId, movieId, date)
		res.status(201).json(result)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

module.exports = router
