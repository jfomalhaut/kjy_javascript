const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const userinfo = {
    username: 'jiyeon',
    password: 'jiyeonpassword'
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/signIn', (req, res) => {
    const { body: { id, pw }} = req;
    if(id === userinfo.username && pw === userinfo.password) {
        res.send({ valid: true, userinfo });
    } else {
        res.send({ valid: false });
    }
    // res.send(true);
});

app.listen(PORT, () => {
    console.log(`EXPRESS SERVER PORT NUMBER IS ${PORT}`);
});

app.use(express.static(path.join(__dirname, './public')));
