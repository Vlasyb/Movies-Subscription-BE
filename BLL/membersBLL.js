const Member = require("../models/memberModel")
const Subscription = require("../models/subscriptionModel")

const getAllMembers = () => {
	return Member.find({})
}

const getMemberById = (id) => {
	return Member.findOne({ _id: id })
}

const addMember = async (obj) => {
	const member = new Member(obj)
	await member.save()
	return "Member Created"
}

const updateMember = async (id, obj) => {
	await Member.findByIdAndUpdate(id, obj)
	return "Updated Member"
}

const deleteMember = async (id) => {
	let result = "Deleted, no relevent subscriptions found for member"
	await Member.findByIdAndDelete(id)
	const subscriptionToDelete = await Subscription.findOne({ memberId: id })
	if (subscriptionToDelete !== null) {
		await Subscription.findByIdAndRemove(subscriptionToDelete._id)
		result = `Deleted member and his subscription`
	}
	console.log(result)
	return result
}

module.exports = {
	deleteMember,
	updateMember,
	addMember,
	getAllMembers,
	getMemberById,
}
