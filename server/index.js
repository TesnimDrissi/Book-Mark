const express = require("express");
const bookRoutes = require('./routes/item.routes')
const db = require('./database-mysql');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())
app.use("/api/books", bookRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
