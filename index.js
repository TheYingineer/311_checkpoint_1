const express = require('express')
const bodyParser = require("body-parser"); // bodyparse is just another form of converted language for postman if I am using bodyParser(line2 & line 9, I don't need to use express.json (line 7). If I decided to use line 7, express.json which has all the updated language and adopted to postman, then I don't need to use bodyParser :)
const app = express();

const usersData = require("./data/index")
const usersRouter = require("./route/route-users")
// app.use(express.json()) // it accepts json data for Postman
app.use(usersRouter)
app.use(bodyParser) //it accepts json data for postman

const port = process.env.PORT || 4000


app.get('/home',(req,res) =>{
  res.send("<h1> Welcome to my server.</h1>") 
})


app.get('/', (req, res) => res.send('default route'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})