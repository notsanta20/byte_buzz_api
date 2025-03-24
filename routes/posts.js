const express = require(`express`);
const router = express();
const postsGet = require(`../controllers/postsGet`);
const postsPost = require(`../controllers/postsPost`);

router.get(`/`, postsGet);
router.post(`/`, postsPost);

module.exports = router;
