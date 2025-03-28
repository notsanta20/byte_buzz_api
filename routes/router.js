const express = require(`express`);
const router = express.Router();
const jwt = require(`../configs/JWTToken`);
const index = require(`../controllers/index`);
const error404 = require(`../controllers/error404`);
const login = require(`./login`);
const signup = require(`./signup`);
const posts = require(`./posts`);
const comment = require(`../controllers/commentsPost`);

router.use(jwt.getToken, jwt.verifyToken);
router.get(`/`, index);
router.use(`/signup`, signup);
router.use(`/login`, login);
router.use(`/post`, posts);
router.use(`/comment/:postId`, comment);
router.get(`*`, error404);

module.exports = router;
