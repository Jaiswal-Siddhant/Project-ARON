class ErrorHandler extends Error {
	constructor(message, statusCode) {
		super(message);
		this.message = message;
		this.statusCode = statusCode;

		// Error.captureStackTrace(this, message);
	}
	getError(res) {
		res.setHeader('Content-Type', 'application/json');
		res.status(this.statusCode);
		res.send(JSON.stringify(this.message));
	}
}

module.exports = ErrorHandler;
