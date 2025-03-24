const express = require(`express`);
const router = express.Router();
const jwt = require(`../configs/JWTToken`);
const index = require(`../controllers/index`);
const error404 = require(`../controllers/error404`);
const login = require(`./login`);
const signup = require(`./signup`);
const posts = require(`./posts`);

router.get(`/`, jwt.getToken, jwt.verifyToken, index);
router.use(`/signup`, jwt.getToken, jwt.verifyToken, signup);
router.use(`/login`, jwt.getToken, jwt.verifyToken, login);
router.use(`/post`, jwt.getToken, jwt.verifyToken, posts);
router.get(`*`, error404);

module.exports = router;
