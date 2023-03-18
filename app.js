
const express = require('express');

const app = express();

app.listen(3000, (req, res) => {
    console.log("listening");
})

app.get('/', (req, res) => {

    res.sendFile('./src/index.html', { root: __dirname });
  
});