const {Router} = require("express");
const router = Router();
const bookCtrl = require("../controller/book.controller")

router.get('/book', bookCtrl.getBook);
router.get('/books', bookCtrl.getBook2);
router.post('/book', bookCtrl.postBook);
router.post('/books', bookCtrl.postBook2);
router.put('/book', bookCtrl.putBook);
router.put('/books', bookCtrl.putBook2);
router.delete('/book', bookCtrl.deleteBook);
router.delete('/books', bookCtrl.deleteBook2);




module.exports = router;