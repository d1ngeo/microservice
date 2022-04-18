const { Router } = require("express");
const router = Router();
const {getall} = require("../controllers/controllerGroups");

router.get("/", getall);



module.exports= router;