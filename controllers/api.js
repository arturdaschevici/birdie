const connection = require('../lib/connection');

function fetchColumns(req, res, next) {
  connection.query('SELECT column_name FROM information_schema.columns WHERE table_name=\'census_learn_sql\'', function (error, results) {
    if (error) return next(error);
    res.json(results);
  });
}

function fetchData(req, res, next) {
  connection.query(`SELECT \`${req.params.variable}\`, COUNT(*) as count FROM census_learn_sql GROUP BY \`${req.params.variable}\` ORDER BY count DESC LIMIT 100`, function (error, results) {
    if (error) return next(error);
    res.json(results);
  });
}

function notFound(req, res) {
  res.status(404).json({ message: 'Not found'});
}

module.exports = {
  fetchData,
  fetchColumns,
  notFound
};
