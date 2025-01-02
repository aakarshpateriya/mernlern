const express = require('express');

require('dotenv').config();

const app = express();

const port = 4000;

app.get('/twitter', (req, res) =>{
    res.send('Hello World');
})

app.get('/login', (req, res) => {
    res.send('<h1> Hello Login Page </h1>');
})

app.get('/youtube', (req, res) =>{
    res.send('<h1> NFC </h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listning on port ${port}`);
})