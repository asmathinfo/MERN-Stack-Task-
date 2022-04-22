const express = require('express');
const app = express();
const connectDB = require('./database/db.js');




connectDB();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(` Port listening on ${port}`));
