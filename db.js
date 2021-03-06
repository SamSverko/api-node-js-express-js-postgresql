const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
	connectionString: process.env.PG_URL,
});

pool.on('connect', () => {
	console.log('Connected to the db.');
});

const createTables = () => {
	const queryText =
	`CREATE TABLE IF NOT EXISTS
	reflections(
		id UUID PRIMARY KEY,
		success VARCHAR(128) NOT NULL,
		low_point VARCHAR(128) NOT NULL,
		take_away VARCHAR(128) NOT NULL,
		created_date TIMESTAMP,
		modified_date TIMESTAMP
	)`;

	pool.query(queryText)
	.then((res) => {
		console.log(res);
		console.log('Table \'reflections\' successfully created.');
		pool.end();
	})
	.catch((err) => {
		console.log(err);
		pool.end();
	});
}

const dropTables = () => {
	const queryText = 'DROP TABLE IF EXISTS reflections';
	pool.query(queryText)
	.then((res) => {
		console.log(res);
		pool.end();
	})
	.catch((err) => {
		console.log(err);
		pool.end();
	});
}

pool.on('remove', () => {
	console.log('Closed connection to db.');
	process.exit(0);
});

module.exports = {
	createTables,
	dropTables
};

require('make-runnable');
