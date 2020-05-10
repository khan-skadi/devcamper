// @desc    Logs request to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next(); // every piece of middleware you use, you need to call next()
};

module.exports = logger;
