// Take the code from each router file and move it into the corresponding controller file
// Make variables (const <something>) for each function
// We will make three functions in each file: "list", "show" and "create"
// You should be able to determine which is which, for example the GET routes will be "list" and "show"

const usersData = require("../data/index")//link from other folders

// * listUsers
//   * Should retrieve the entire array from _data/index_

// * showUser
//   * Should retrieve just the user that matches the passed-in id

// * createUser
//   * Should add a user to the array

// * updateUser
//   * Should update one user in the array based on its id

// * deleteUser
//   * Should delete one user from the array based on its id


const showUser= (req,res) =>{
        let id = req.params.id;//specially get id from the request parameter 
        let foundComment = usersData.find((element, index, array)=>{
            return id == element.id;
        })
        if(!foundComment){
            return res.status(404).json("User",id," does not exist")
        }
        res.json(foundComment); 
    }

const listUser = (req,res) => {
        res.json(usersData) 
}

const createUser = (req,res) => {
    // let body = req.body;
    
    //how to destructure an object
    console.log('the body:', req.body)
    const{id, body} = req.body
    const newId = usersData.length+1
    req.body.id = newId
    // const {id: dog, body: cat} = req.body
    // const id = req.body.id
    // const body = req.body.body
    // console.log(dog) // only display id alone
    // console.log(cat)// only display body alone
    console.log(id) // only display id alone
    console.log(body)// only display body alone
    //end of destructure


    usersData.push(req.body)
    res.json(usersData)
}

const updateUser = (req,res) =>{
    let id = req.params.id;//specially get id from the request parameter 
    const { body, postId} = req.body //desctruction of object // deleted id 
   
    let foundIndex = usersData.findIndex((element, index, array) => {
        return id == element.id;})
    if(foundIndex<0){
            return res.status(404).json("User",id," does not exist")
        }

    usersData[foundIndex] = req.body
    usersData[foundIndex].id = id

    res.json(usersData); 
}


// Make sure that you are handling common use cases. 
//For example, if we try to find a user by its id_ and no id exists,
// we should return a 404 status code and no data. Likewise for the PUT and DELETEs, 
//if a user doesn't exist return a 400 (bad request) status code.

const deleteUser = (req,res) =>{
    let id = req.params.id;//specially get id from the request parameter 
    let foundIndex = usersData.findIndex((element, index, array)=>{
        return id == element.id;
    })
    if(foundIndex<0){
        return res.status(404).json("User",id," does not exist")
    }
    usersData.splice(foundIndex,1)
    res.status(200).json(usersData) 

}

module.exports = { showUser, listUser, createUser, updateUser, deleteUser } // need to add deleteUser//export :)