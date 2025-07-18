// index.js

class HttpError extends Error {
    constructor(statusCode, message = null) {
        super(message || HttpError.defaultMessage(statusCode));
        this.name = 'HttpError';
        this.status = statusCode;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }

    static defaultMessage(code) {
        const messages = {
            400: 'Bad Request',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Not Found',
            429: 'Too Many Requests',
            500: 'Internal Server Error',
        };
        return messages[code] || 'Unknown Error';
    }

    toJSON() {
        return {
            status: this.status,
            message: this.message,
        };
    }
}

function createError(code, message) {
    return new HttpError(code, message);
}

module.exports = {
    createError,
    HttpError,
};
