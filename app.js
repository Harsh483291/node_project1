//import the express package
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;

//initialize a new express instance equal to the app object
const app = express();

//route handler that sends back a response
app.get('/home', (req, res) =>{
    res.send("Hello, World!");
});

app.post('/response', (req, res) =>{
    const user_id = req.body.user_id;
    res.send('This is the user id: ${user_id}'); 
});

//Start our server, listening on port 3000
app.listen(PORT, () =>{
    console.log(`Connected on port ${PORT}`);
});