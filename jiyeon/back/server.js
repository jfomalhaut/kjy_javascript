const express = require('express');
const app = express();
const path = require('path');

app.get('/test' , test, (req, res, next) => {
    const {query: { name, price }} = req;
    console.log(req.query);
    res.send('ok!');
});

function test(req, res, next) {//미들웨어 
    console.log('작동 test!');
}

app.use(express.static(path.join(__dirname, './public')));


app.listen(4000, () => {
    console.log('START EXPRESS SERVER, PORT NUMBER: ' + 4000);
});

app.post('/api/signUp', (req, res, next) => {
    const user = {id: 'id', pw: 'pw'};
    res.send()
})