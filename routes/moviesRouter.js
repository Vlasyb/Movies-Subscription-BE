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

router.get("/movie/:id", async (req, res) => {
	try {
		const { id } = req.params
		const movie = await moviesBLL.getMovieById(id)
		res.status(200).json(movie)
	} catch (error) {
		console.log("error ", error)
		res.status.send(error.message)
	}
})

router.get("/nametoid/:name", async (req, res) => {
	try {
		const { name } = req.params
		console.log(name)
		const movieId = await moviesBLL.getMovieIdByName(name)
		res.status(200).json(movieId)
	} catch (error) {
		console.log("error ", error)
		res.status.send(error.message)
	}
})

router.post("/", async (req, res) => {
	try {
		const obj = req.body
		const result = await moviesBLL.addMovie(obj)
		res.status(201).json(result)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params
		const obj = req.body
		result = await moviesBLL.updateMovie(id, obj)
		res.status(201).json(result)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

module.exports = router
