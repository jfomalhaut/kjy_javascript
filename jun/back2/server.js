import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
const app = express();
const PORT = process.env.PORT || 80;

const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, callback) => {
			callback(null, './files');
		},
		filename: (req, file, callback) => {
			callback(null, 'file' + new Date().valueOf() + path.extname(file.originalname));
		}
	})
});

const field = [
	{ name: 'file' }
];

const final = (req, res, next) => {
	const {
		files: { file },
		body: { name, price, detail, option }
	} = req;
	console.log(name, price, option, detail);
	res.send({ result: true, filename: file[0].filename });
};


app.use(cors({
	credentials: true,
	origin: ['http://localhost:3000']
}));

app.use('/files', express.static(path.join(path.resolve(), './files')));

app.post('/api/upload', upload.fields(field), final);

app.listen(PORT, () => {
	console.log(`START NODE EXPRESS PORT NUMBER ${PORT}`);
})