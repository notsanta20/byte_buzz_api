const express = require(`express`);
const router = express();
const postsGet = require(`../controllers/postsGet`);
const postsPost = require(`../controllers/postsPost`);

router.get(`/:postId`, postsGet);
router.post(`/:postId`, postsPost);

module.exports = router;
