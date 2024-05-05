const express = require("express");
const {users} = require("./data/users.json")

const app = express();

const PORT = 8081;

app.use(express.json());

// http://localhost:8081/
app.get("/", (req, res)=> {
    res.status(200).json({
        message: "Server is up and running"
    })
})


/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Paramaters: None
 */
app.get("/users", (req, res)=>{
    res.status(200).json({
        success: true,
        data: users
    })
})


/**
 * Route: /users/:id
 * Method: GET
 * Description: Get single user by their ID
 * Access: Public
 * Paramaters: id
 */
app.get("/users/:id", (req, res)=>{
    const {id} = req.params;
    const user = users.find((each)=> each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Not Found For The Given Id :-("
        })
    }
    return res.status(200).json({
        success: true,
        data: user
    })
})


/**
 * Route: /users
 * Method: POST
 * Description: Create a New User
 * Access: Public
 * Paramaters: None
 */
app.post("/users", (req, res)=>{
    const {id, name, surname, emai, subscriptionType, subscriptionDate} = req.body;

    const user = users.find((each)=> each.id === id);
    if(user){
        return res.status(404).json({
            success: false,
            message: "User with the given Id exist :-("
        })
    }
    users.push(
        {id, name, surname, emai, subscriptionType, subscriptionDate
    })
    return res.status(201).json({
        success: true,
        data: users
    })
})


/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user by their ID
 * Access: Public
 * Paramaters: ID
 */
app.put('/users/:id', (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const user = users.find((each)=> each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Not Found For The Given Id :-("
        })
    }

    const updateUser = users.map((each)=>{
        if(each.id===id){
            return {
                ...each,
                ...data
            }
        }
        return each;
    })
    return res.status(200).json({
        success: true,
        data: updateUser
    })

})


/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by their ID
 * Access: Public
 * Paramaters: ID
 */
app.delete("/users/:id", (req, res)=>{
    const {id} = req.params;
    

    const user = users.find((each)=> each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Not Found For The Given Id :-("
        })
    }
    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.status(200).json({
        success: true,
        data: users
    })
})

app.all("*", (req, res)=>{
    res.status(500).json({
        message: "This route does not exist :-("
    })
})

app.listen(PORT, () => {
    console.log(`Server is up and running at port: ${PORT}`)
})