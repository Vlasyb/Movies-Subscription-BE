const mongoose = require("mongoose")

const connectDB = () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/subscriptions", {
			serverSelectionTimeoutMS: 5000, // 5 seconds timeout
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Connected to subscriptions db")
		})
		.catch((error) => {
			console.log("Error connecting to database:", error)
		})
}

module.exports = connectDB
