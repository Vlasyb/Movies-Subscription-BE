const Subscription = require("../models/subscriptionModel")
const Member = require("../models/memberModel")
const Movie = require("../models/movieModel")

const getAllSubscriptions = () => {
	return Subscription.find({})
}

const getSubscriptionById = (id) => {
	return Subscription.findOne({ _id: id })
}

module.exports = {
	getAllSubscriptions,
	getSubscriptionById,
}
