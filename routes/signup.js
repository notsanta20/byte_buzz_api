const express = require(`express`);
const router = express();
const signupGet = require(`../controllers/signupGet`);
const signupPost = require(`../controllers/signupPost`);

router.get(`/`, signupGet);
router.post(`/`, signupPost);

module.exports = router;
