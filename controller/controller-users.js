const usersData = require("../data/index")//link from other folders

const show = (req,res) =>{
    let id = req.params.id;//specially get id from the request parameter 
    let foundComment = usersData.find((element, index, array)=>{
        return id == element._id;
    })
    res.json(foundComment); 
}

const list = (req,res) => {
    res.json(usersData) 
}

const create = (req,res) => {
    // let body = req.body;
    
    //how to destructure an object
    console.log('the body:', req.body)
    const{_id, body} = req.body
    const newId = usersData.length+1
    req.body._id = newId
    // const {_id: dog, body: cat} = req.body
    // const _id = req.body._id
    // const body = req.body.body
    // console.log(dog) // only display id alone
    // console.log(cat)// only display body alone
    console.log(_id) // only display id alone
    console.log(body)// only display body alone
    //end of destructure


    usersData.push(req.body)
    res.json(usersData)
}


const put = (req,res) =>{
    let id = req.params.id;//specially get id from the request parameter 
    const {_id, body, postId} = req.body //desctruction of object
   
    let foundIndex = usersData.findIndex((element, index, array) => {
        return id == element._id;})

    usersData[foundIndex].body = body
    usersData[foundIndex]._id = _id
    usersData[foundIndex].postId = postId 

    res.json(usersData); 
}

   const delete = (req,res) => {
        let id = req.params.id
        let foundIndex = users.findIndex((element)=>{
              
          return id == element._id // we are comparing id to element ._id in the json file
        })
        users.splice(foundIndex,1)
      
        // console.log(users)
        res.status(200).json(users) 
      
      }

module.exports = { show, list, create, put, delete } //export :)