const express = require('express');
const app = express();
const postRouter = require('./routes/postRouter')
const cors = require('cors');

app.use(cors())

app.use(express.json())
app.use('/api/v1/post', postRouter)

module.exports = app