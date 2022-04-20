const router = require("expresss").Router();
const notesRoutes = require("./notesRoutes");

router.use(notesRoutes);
module.exports = router;
