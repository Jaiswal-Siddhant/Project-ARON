const app = require('./app');
const dotenv = require('dotenv');

const connectDB = require('./db/database');

process.on('uncaughtException', (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down server due to Uncaught Promise Rejection`);
	process.exit(1);
});

// Config
dotenv.config({ path: 'server/config/config.env' });

connectDB();
const server = app.listen(process.env.PORT, () => {
	console.log(`Listening on http://localhost:${process.env.PORT}`);
});

// unhandled Promise rejection
process.on('unhandledRejection', (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down server due to Unhandled Promise Rejection`);
	server.close(() => {
		process.exit(1);
	});
});
