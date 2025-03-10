const { error } = require('console');
const express = require('express');
const app = express() ;
const port = 3000 ;

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello, express server is running");
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

app.post('/details', (req,res) => {
    const { title, description, duedate } = req.body;

    if (!title){
        return res.status(400).json({ error: "Title cannot be empty"}) ; 
    }

    if (!description){
        return res.status(400).json({ error: "Description cannot be empty"}) ;
    }

    if (!duedate){
        return res.status(400).json({ error: "Due date should be valid future"}) ;
    }


    res.status(201).json({
        message: "User details updated successfully",
        user: {
            title,
            description,
            duedate,
        }
    });
});