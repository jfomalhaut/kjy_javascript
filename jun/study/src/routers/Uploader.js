import React, { useState } from 'react';
import Axios from 'axios';

const Uploader = () => {
	const [viewer, setViewer] = useState(null);
	const [file, setFile] = useState(null);

	const onChangeFiles = (ev) => {
		const { target: { name, files } } = ev;
		let reader = new FileReader();

		if (files.length > 0) {
			reader.readAsDataURL(files[0]);

			setFile(files[0]);
		}

		reader.onloadend = () => {
			const base64 = reader.result;
			if (base64) {
				// setViewer(base64.toString());
			}
		}
	};

	const upload = () => {
		const formData = new FormData();
		const payload = {
			name: '이름이',
			price: 5000,
			detail: '라라랄라',
			option: 'OPTIONS',
		};
		for (let key in payload) {
			formData.append(key, payload[key]);
		}
		formData.append('file', file);

		const url = 'http://localhost/api/upload';

		Axios.post(url, formData).then(res => {
			const { data: { result, filename } } = res;
			const url = `http://localhost/files/${filename}`;
			setViewer(url);
		}).catch(error => {
			console.log(error);
		});
	};

	return (
		<div>
			<input name="thumbnail" multiple type="file" onChange={onChangeFiles} />
			{viewer && (
				<figure>
					<img src={viewer} />
				</figure>
			)}
			<button onClick={upload}>등록하기</button>
		</div>
	)
}

export default Uploader
