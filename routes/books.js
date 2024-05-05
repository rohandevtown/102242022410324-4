const express = require("express");
const {books} = require("../data/books.json");

const router = express.Router();


/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Paramaters: None
 */
router.get("/", (req, res)=>{
    res.status(200).json({
        success: true,
        data: books
    })
})



/**
 * Route: /books/:id
 * Method: GET
 * Description: Get single book by their ID
 * Access: Public
 * Paramaters: id
 */
router.get("/:id", (req, res)=>{
    const {id} = req.params;
    const book = books.find((each)=> each.id === id);
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Not Found For The Given Id :-("
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })
})


/**
 * Route: /books
 * Method: POST
 * Description: Create a New Book
 * Access: Public
 * Paramaters: None
 */
router.post("/", (req, res)=>{
    const {id, name, author, genre, price, publisher} = req.body;

    const book = books.find((each)=> each.id === id);
    if(book){
        return res.status(404).json({
            success: false,
            message: "Book with the given Id exist :-("
        })
    }
    books.push(
        {id, name, author, genre, price, publisher
    })
    return res.status(201).json({
        success: true,
        data: books
    })
})


/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book by their ID
 * Access: Public
 * Paramaters: ID
 */
router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const book = books.find((each)=> each.id === id);
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Not Found For The Given Id :-("
        })
    }

    const updateBook = books.map((each)=>{
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
        data: updateBook
    })

})


module.exports = router;