const express = require('express')
// const bodyParser = require("body-parser");
const app = express();

const usersData = require("./data/index")
const usersRouter = require("./route/route-users")
app.use(express.json()) // it accepts json data
// app.use(bodyParser)

const port = process.env.PORT || 4000


app.get('/home',(req,res) =>{
  res.send("<h1> Welcome to my server.</h1>") 
})


app.get('/', (req, res) => res.send('default route'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})