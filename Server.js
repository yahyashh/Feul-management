
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


// api

app.post('/formfulldata', (req, res) => {
    const { stationName, totalLitre, pricePerLitre, totalPrice, location, dateTime } = req.body;


    console.log('Received data:', { stationName, totalLitre, pricePerLitre, totalPrice, location, dateTime, });
    res.json({ message: 'Data received successfully' });
});


app.post('/createuser', (req, res) => {
    const { emailPhone, name, age, skill, experience, location } = req.body;


    console.log('Received data:', { emailPhone, name, age, skill, experience, location });
    res.json({ message: 'Data received successfully' });
});


app.listen(port, () => {
    console.log("Server is running on ", { port });
});


