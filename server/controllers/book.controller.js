const db = require("../database-mysql");



const selectAll = function (req, res) {
  db.query("SELECT * FROM books", (err, results, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

const addBook = function (req, res) {
  db.query("insert into books set name=? ,category=?, author=?, description=?",[req.body.name,req.body.category,req.body.author,req.body.description], (err, results, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
      console.log(results);
    }
  });
};
const updateBook = function (req, res) {
  db.query("update books set name=? ,category=?, author=?, description=? where idbooks =?",[req.body.name,req.body.category,req.body.author,req.body.description,req.params.idbooks], (err, results, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
      console.log(results);
    }
  });
};

const deleteBook = function (req, res) {
  db.query("delete from books where idbooks =?",[req.params.idbooks], (err, results, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
      console.log(results);
    }
  });
};



module.exports = { selectAll,addBook,updateBook,deleteBook };
