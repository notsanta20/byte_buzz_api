const express = require(`express`);
const router = express();
const postsGet = require(`../controllers/postsGet`);
const postsPost = require(`../controllers/postsPost`);
const postsDelete = require(`../controllers/postsDelete`);

router.get(`/:postId`, postsGet);
router.post(`/`, postsPost);
router.delete(`/:postId`, postsDelete);

module.exports = router;
