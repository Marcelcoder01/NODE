const {Router} = require("express");
const router = Router();
const userCtrl = require("../controller/user.controller")

router.get('/user', userCtrl.getUser);
router.get('/bye', userCtrl.getUser2);
router.post('/user', userCtrl.postUser);
router.post('/user', userCtrl.putUser);
router.post('/user', userCtrl.deleteUser);




module.exports = router;