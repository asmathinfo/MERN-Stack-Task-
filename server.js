const express = require('express');
const app = express();
const connectDB = require('./database/db');




connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(` Port listening on ${port}`));
