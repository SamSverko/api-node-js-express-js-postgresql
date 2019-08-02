# api-node-js-express-js-postgresql

Learning how to build a simple API with Node.js, Express.js, and PostgreSQL.

---

## Initial setup

* Update dependencies, run `npm i`.

* Update environment variables:

	* Rename `sample.env` file to `.env`.

	* Replace `db_username`, `db_password`, `host`, `port`, and `db_name` variables in `PG_URL` path.

---

## Run app in development mode

* Update the `ENV_TYPE` value in `.env` to `dev`.

* Build table in database, run: `npm run build-db-table`.

* Start app in development mode, run: `npm run start-dev`.

To view app in browser locally, open [http://localhost:3000/](http://localhost:3000/).

The local server will reload if you make edits.

---

## Build app for deployment

* Update the `ENV_TYPE` value in `.env` to any value except `dev`.

* Compile code using Babel, run `build`.

* Start the app in production mode, run: `npm run start`.

---

## Thanks

Many thanks to [this tutorial](https://www.codementor.io/olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-and-postgresql-db-masuu56t7) for the first steps.
