const express = require("express");
const router = express.Router();

const { authRegister, authLogin, authCheckToken } = require("../controller");

router.post("/users/register", authRegister);
router.post("/users/login", authLogin);
router.get("/users/check", authCheckToken);

module.exports = router;
