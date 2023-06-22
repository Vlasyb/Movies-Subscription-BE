const express = require("express")
const membersBLL = require("../BLL/membersBLL")

const router = express.Router()

router.get("/", async (req, res) => {
	try {
		const members = await membersBLL.getAllMembers()
		res.status(200).json(members)
	} catch (error) {
		console.log("error: ", error)
		res.status(500).send(error.message)
	}
})

module.exports = router
