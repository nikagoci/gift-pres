const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config()

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.set('strictQuery', true)
mongoose.connect(DB).then(() => console.log("DB connection established"))

const PORT = process.env.PORT | 5000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})