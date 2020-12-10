const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const userinfo = {
	username: 'dlwnssla',
	password: 'dlwns',
	age: 25,
	tel: '0102222',
	address: '서울 성동구'
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/signin', (req, res) => {
	const { body: { username, password } } = req;
	if (username === userinfo.username && password === userinfo.password) {
		res.send({ valid: true, userinfo });
	} else {
		res.send({ valid: false });
	}
});

app.listen(PORT, () => {
	console.log(`EXPRESS SERVER PORT NUMBER IS ${PORT}`);
});