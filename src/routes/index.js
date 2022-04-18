const {Router} = require("express");
const routerGroups = require("./routerGroups");
const router = Router();

router.use("/groups", routerGroups)

module.exports = router;