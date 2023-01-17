const express = require('express');
const app = express();
const postRouter = require('./routes/postRouter')



app.use(express.json())
app.use('/api/v1/post', postRouter)




module.exports = app