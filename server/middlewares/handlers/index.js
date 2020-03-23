export const notFound = ((req, res, next) => {
    const error = new Error('Resource not found');
    error.status = 404;

    next(error);
});

export const error = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    res.status(status).json({
        'status': status,
        'message': message
    });
};
