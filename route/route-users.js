const express = require('express')
const router = express.Router()
const usersData = require("../data/index")//importing data
const usersController = require("../controller/controller-users")//importing data



// Ex. app.get('/contacts') in "index.js" becomes router.get('/contacts') in "routes/contacts.js"
// Make sure you move the appropriate "data" from the index.js file into the new file

// GET /users
// * Return all users

// * GET /users/:id
// * Return just the user that matches the path param (id)

// * POST /users
// * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

// * PUT /users/:id
// * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

// * DELETE /users/:id
// * Delete one user by its id


router.get('/users',usersController.listUser)

router.get('/users/:id',usersController.showUser)//we create a different file under Comment-controller and it's calling for list function

router.post('/users/new-comment', usersController.createUser)

router.put('/users/:id',usersController.updateUser)

// router.delete('/users/:id', usersController.deleteUser)

// Make sure you export the router from each file
module.exports= router

