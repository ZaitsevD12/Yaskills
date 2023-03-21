
const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000, () => {
    console.log("listening");
});

app.use(express.json());
app.use(morgan('dev'));

app.post('/', (req, res) => {
    const data = req.body;
    if(data.request.command.toLowerCase().includes('привет')){
        res.json({
            "response": {
                "text": 'Привет! Со мной ты можешь узнать о ближайших фронтенд-событиях в России.',
                "tts": 'Привет! Со мной ты можешь узнать о ближайших фронтенд-событиях в России.',
                
            },
            version,
            session
        });
    } else {
        res.json({});
    }
});

app.get('/', (req, res) => {
    res.sendFile('./src/index.html', { root: __dirname });
});
    


