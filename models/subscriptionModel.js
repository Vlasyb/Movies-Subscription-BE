const mongoose = require("mongoose")

const subscriptionSchema = mongoose.Schema(
	{
		memberId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Member",
			required: true,
		},
		movies: [
			{
				movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
				date: { type: Date },
			},
		],
	},
	{ versionKey: false }
)

const Subscription = mongoose.model("subscriptions", subscriptionSchema)

module.exports = Subscription
