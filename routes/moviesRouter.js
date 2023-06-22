const express = require("express")
const moviesBLL = require("../BLL/moviesBLL")

const router = express.Router()

router.get("/", async (req, res) => {
	try {
		const movies = await moviesBLL.getAllMovies()
		res.status(200).json(movies)
	} catch (error) {
		console.log("error: ", error)
		res.status(500).send(error.message)
	}
})

module.exports = router
