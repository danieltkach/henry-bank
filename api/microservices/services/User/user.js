const express = require('express');
const {PORT_USER} = process.env

let app = express();

app.get('/users', (req, res, next) => {
    res.send(["Tony","Lisa","Michael","Ginger","Food"])
})

app.listen(4000, () => {
    console.log('Server running on 4000');
})