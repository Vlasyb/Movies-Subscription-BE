const Member = require("../models/memberModel")

const getAllMembers = () => {
	return Member.find({})
}

const getMemberById = (id) => {
	return Member.findOne({ _id: id })
}

module.exports = {
	getAllMembers,
	getMemberById,
}
