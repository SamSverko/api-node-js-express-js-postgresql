import express from 'express';
import dotenv from 'dotenv';
import '@babel/polyfill';

import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
import ReflectionWithDB from './src/usingDB/controllers/Reflection';

dotenv.config();

const app = express();

const DATA_TYPE = process.env.DATA_TYPE;
const HOST = process.env.ENV_TYPE === 'dev' ? 'http://localhost' : 'URL TBD';
const PORT = 3000;

const Reflection = DATA_TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;

app.use(express.json());

app.get('/', (req, res) => {
	return res.status(200).send({
		'message': 'Endpoint is working!'
	});
});

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

app.listen(PORT);

console.log(`App is running at ${HOST}:${PORT} | Data is coming from: ${DATA_TYPE}.`);
