const express = require('express')
const router = express.Router()
const usersData = require("../data/index")//importing data
const usersController = require("../controller/controller-users")//importing data



// Ex. app.get('/contacts') in "index.js" becomes router.get('/contacts') in "routes/contacts.js"
// Make sure you move the appropriate "data" from the index.js file into the new file

router.get('/users',usersController.list)

router.get('/users/:id',usersController.show)//we create a different file under Comment-controller and it's calling for list function

router.post('/users/new-comment', usersController.create)

router.put('/users/:id',usersController.put)

// router.delete('/users/:id', usersController.delete)

// Make sure you export the router from each file
module.exports= router

