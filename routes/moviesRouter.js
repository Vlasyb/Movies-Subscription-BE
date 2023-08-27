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

router.get("/getpaginatedmovies/:page/:limit", async (req, res) => {
	try {
		const { page, limit } = req.params
		const moviesList = await moviesBLL.getPaginatedMovies(page, limit)
		res.status(200).json(moviesList)
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
		res.status(500).send(error.message)
	}
})

router.get("/nametoid/:name", async (req, res) => {
	try {
		const { name } = req.params
		const movieId = await moviesBLL.getMovieIdByName(name)
		res.status(200).json(movieId)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

//get all movies by phrase (genres and name)
router.get("/findmovie/:phrase", async (req, res) => {
	try {
		const { phrase } = req.params
		const movies = await moviesBLL.getMoviesByPhrase(phrase)
		res.status(200).json(movies)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

router.get("/nonWatchedMovies/:memberId", async (req, res) => {
	try {
		const { memberId } = req.params
		const movies = await moviesBLL.getNonWatchedMoviesForMember(memberId)
		res.status(200).json(movies)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
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

//delete movie + delete it in subscriptions if it exists
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params
		result = await moviesBLL.deleteMovie(id)
		res.json(result)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

module.exports = router
