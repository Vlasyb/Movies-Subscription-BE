const express = require("express")
const cors = require("cors")

const app = express()
const port = 8001

app.use(express.json())

app.listen(port, () => {
	console.log(`app is listening at http://localhost:${port}`)
})
