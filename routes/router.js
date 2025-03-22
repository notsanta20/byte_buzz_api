const express = require(`express`);
const router = express.Router();
const index = require(`../controllers/index`);
const error404 = require(`../controllers/error404`);
const login = require(`./login`);
const signup = require(`./signup`);

router.get(`/`, index);
router.use(`/signup`, signup);
router.use(`/login`, login);
router.get(`*`, error404);

module.exports = router;
