//Subscription backend server
const axios = require("axios")
const Member = require("./models/memberModel")
const Movie = require("./models/movieModel")

const membersRouter = require("./routes/membersRouter")
const moviesRouter = require("./routes/moviesRouter")
const subscriptionsRouter = require("./routes/subscriptionsRouter")

const express = require("express")
const cors = require("cors")

const connectDB = require("./configs/DB")
const app = express()
const port = 8036

app.use(express.json())

const populateDB = async () => {
	const membersURL = "https://jsonplaceholder.typicode.com/users"
	const moviesURL = "https://api.tvmaze.com/shows"
	try {
		const { data: members } = await axios.get(membersURL)
		const { data: movies } = await axios.get(moviesURL)

		const memberWantedFields = members.map(
			({ name, email, address: { city } }) => ({
				name,
				email,
				city,
				//myCity : city //myCity is renamed field
			})
		)
		const movieWantedFields = movies.map(
			({ name, genres, image, premiered }) => ({
				name,
				genres,
				image: image.medium, // image is array of [medium:string,original:string]
				premiered,
			})
		)
		// Check if data already exists in the database
		const existingMembers = await Member.countDocuments()
		const existingMovies = await Movie.countDocuments()

		if (existingMembers === 0 && existingMovies === 0) {
			await Member.insertMany(memberWantedFields)
			await Movie.insertMany(movieWantedFields)
			console.log("Database populated")
		} else {
			console.log("Database already populated")
		}
	} catch (error) {
		console.log("Error populating the database:", error)
	}
}

//Routers
app.use("/members", membersRouter)
app.use("/movies", moviesRouter)
app.use("/subscriptions", subscriptionsRouter)

const startServer = async () => {
	try {
		await connectDB()
		await populateDB()

		app.listen(port, () => {
			console.log(`app is listening at http://localhost:${port}`)
		})
	} catch (error) {
		console.log("Error starting the server:", error)
	}
}

startServer()
