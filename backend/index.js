const express = require('express');
const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello');
    console.log('hello')
})

app.listen(PORT, () => {
    console.log("Server running: " + PORT)
})