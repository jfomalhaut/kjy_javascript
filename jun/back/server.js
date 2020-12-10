const express = require('express');
const path = require('path');
const app = express();

app.get('/test', test, finaly);

function test(req, res, next) {
	const { query: { name, price } } = req;
	if (Number(price) > 10000) {
		next();
	} else {
		res.send('그 돈으론 안 됩니다');
	}
}

function finaly(req, res, next) {
	const { query: { name, price } } = req;
	res.send(`
		<h1>나는 ${name}다! 내가 쓴 돈은 ${price}원이다!</h1>
	`);
}

app.use(express.static(path.join(__dirname, './public')));
app.get('*', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(4000, () => {
	console.log('START EXPRESS SERVER, PORT NUMBER : ' + 4000);
});