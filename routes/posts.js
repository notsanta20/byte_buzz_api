const express = require(`express`);
const router = express();
const postsGet = require(`../controllers/postsGet`);
const postsPost = require(`../controllers/postsPost`);
const getToken = require(`../configs/getToken`);
const verifyToken = require(`../configs/verifyToken`);

router.get(`/`, getToken, verifyToken, postsGet);
router.post(`/`, postsPost);

module.exports = router;
