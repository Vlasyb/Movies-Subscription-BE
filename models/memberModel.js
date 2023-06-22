const mongoose = require("mongoose")

const memberSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: String,
		city: String,
	},
	{ versionKey: false }
)
const Member = mongoose.model("members", memberSchema)

module.exports = Member
