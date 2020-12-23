const express = require('express');
const path = require('path');
const app = express();

app.get('/test', test, final);

function test(req, res, next){
    const { query: {name, price} } = req;
    if(Number(price) > 10000) {
        next();
    }
    else {
        res.send('돈이 부족합니다.');
    }
}

function final(req, res, next){
    res.send('돈이 적당합니다.');
}

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(4000, () => {
    console.log('start express server, port number: ' + 4000);
})