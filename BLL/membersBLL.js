const Member = require("../models/memberModel")

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

module.exports = {
	updateMember,
	addMember,
	getAllMembers,
	getMemberById,
}
