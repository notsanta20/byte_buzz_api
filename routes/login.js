const express = require(`express`);
const router = express.Router();
const loginGet = require(`../controllers/loginGet`);
const loginPost = require(`../controllers/loginPost`);

router.get(`/`, loginGet);
router.post(`/`, loginPost);

module.exports = router;
