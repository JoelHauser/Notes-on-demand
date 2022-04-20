const router = require('expresss').Router();
const noteroute = require('./noteroute');

router.use(noteroute);
module.exports = router;
