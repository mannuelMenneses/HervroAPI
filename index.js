// BASE SETUP
// ==============================================
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// ROUTES
// ==============================================

// START THE SERVER
// ==============================================
app.listen(port, () => {
	console.log(`Working on port: ${port}`)
})
