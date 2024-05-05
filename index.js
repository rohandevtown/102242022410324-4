const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.json());

// http://localhost:8081/
app.get("/", (req, res)=> {
    res.status(200).json({
        message: "Server is up and running"
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