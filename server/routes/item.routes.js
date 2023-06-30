const router = require('express').Router();
const bookController = require("../controllers/book.controller");

router.get("/", bookController.selectAll);
router.post('/add',bookController.addBook)
router.put('/:idbooks',bookController.updateBook)
router.delete('/:idbooks',bookController.deleteBook)

module.exports = router;
