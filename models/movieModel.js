const mongoose = require("mongoose")

const movieSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		genres: [String],
		image: String,
		premiered: Date,
	},
	{ versionKey: false }
)

const Movie = mongoose.model("movies", movieSchema)

module.exports = Movie
