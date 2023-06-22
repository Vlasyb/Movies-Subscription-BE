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

module.exports = router
