const router = require('express').Router();
const api = require('../controllers/api');

router.get('/columns', api.fetchColumns);
router.get('/data/:variable', api.fetchData);
router.all('/*', api.notFound);

module.exports = router;
