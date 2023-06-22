const Subscription = require("../models/subscriptionModel")
const Member = require("../models/memberModel")
const Movie = require("../models/movieModel")

const getAllSubscriptions = () => {
	return Subscription.find({})
}

module.exports = {
	getAllSubscriptions,
}
