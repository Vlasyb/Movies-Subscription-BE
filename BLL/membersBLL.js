const Member = require("../models/memberModel")

const getAllMembers = () => {
	return Member.find({})
}

module.exports = {
	getAllMembers,
}
