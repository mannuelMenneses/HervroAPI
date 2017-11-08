// BASE SETUP
// ==============================================
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

// ROUTES
// ==============================================

// START THE SERVER
// ==============================================
app.listen(port, () => {
	console.log(`Working on port: ${port}`)
})
