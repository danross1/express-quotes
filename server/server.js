const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended: true}));

let quotes = [{quote: 'A quote', author: 'Someone'}, {quote: 'Another quote', author: 'I dunno, someone else'}];

const port = 5000;

app.listen(port, () => console.log('listening on port', port));

app.get('/quotes', (req, res)=>{
    res.send(quotes);
})