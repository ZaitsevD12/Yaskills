
const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000, (req, res) => {
    console.log("listening");
})

//парсит все входящие данные
app.use(express.json());

const json = `{
    "meta": {
      "locale": "ru-RU",
      "timezone": "UTC",
      "client_id": "ru.yandex.searchplugin/7.16 (none none; android 4.4.2)",
      "interfaces": {
        "screen": {},
        "payments": {},
        "account_linking": {}
      }
    },
    "session": {
      "message_id": 0,
      "session_id": "27cdacd4-5fc4-48c6-afcd-595c8deac234",
      "skill_id": "5051809b-66da-4cf2-b869-f037d647b9e8",
      "user": {
        "user_id": "CA470DA01E8944F8EF91F621AB5FA76DC3933E9BE582183278ECA1871C45BF2E"
      },
      "application": {
        "application_id": "5C377960007E6703AA4F8864E2B68A217ADEA848849D8C2AF4D36864F72F9167"
      },
      "user_id": "5C377960007E6703AA4F8864E2B68A217ADEA848849D8C2AF4D36864F72F9167",
      "new": true
    },
    "request": {
      "command": "привет",
      "original_utterance": "Привет",
      "nlu": {
        "tokens": [
          "привет"
        ],
        "entities": [],
        "intents": {}
      },
      "markup": {
        "dangerous_context": false
      },
      "type": "SimpleUtterance"
    },
    "state": {
      "session": {},
      "user": {},
      "application": {}
    },
    "version": "1.0"
  }`;
  
  

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     const data = req.body;
//     console.log(data);
//     next();
// });

app.use((req, res) => {
  const data = req.body;
  if(data.request.nlu.token == "привет"){
    return {
      "response": {
        "text": 'Привет! Со мной ты можешь узнать о ближайших фронтенд-событиях в России.',
        "tts": 'Привет! Со мной ты можешь узнать о ближайших фронтенд-событиях в России.'
      }
    };
  }
});

app.get('/', (req, res) => {

    res.sendFile('./src/index.html', { root: __dirname });
  
});


    


