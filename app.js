
const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000, (req, res) => {
    console.log("listening");
})

app.use(morgan('dev'));

app.use((req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {

    res.sendFile('./src/index.html', { root: __dirname });
  
});


    


