function errorHandler(err, req, res, next) {
  err.message = err.message || 'Internal Server Error';
  err.status = err.status || 500;

  res.status(err.status).json({ message: err.message });

  next(err);
}

module.exports = errorHandler;
