const express = require("express")
const membersBLL = require("../BLL/membersBLL")

const router = express.Router()

router.get("/", async (req, res) => {
	try {
		const members = await membersBLL.getAllMembers()
		res.status(200).json(members)
	} catch (error) {
		console.log("error: ", error)
		res.status(500).send(error.message)
	}
})

router.get("/member/:id", async (req, res) => {
	try {
		const { id } = req.params
		const member = await membersBLL.getMemberById(id)
		res.status(200).json(member)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

router.post("/", async (req, res) => {
	try {
		const obj = req.body
		const result = await membersBLL.addMember(obj)
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
		result = await membersBLL.updateMember(id, obj)
		res.status(201).json(result)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})
//delete member + his subscriptions
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params
		result = await membersBLL.deleteMember(id)
		res.json(result)
	} catch (error) {
		console.log("error ", error)
		res.status(500).send(error.message)
	}
})

module.exports = router
