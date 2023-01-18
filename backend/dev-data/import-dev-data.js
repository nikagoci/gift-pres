const fs = require('fs');
const mongoose = require('mongoose');
const Post = require('../models/postModel');

require('dotenv').config()

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.set('strictQuery', true)
let connectDB = async () => {
    await mongoose.connect(DB).then(() => console.log('DB connection established'))
}

const posts = JSON.parse(fs.readFileSync(`${__dirname}/post-simple.json`, 'utf-8'));

const importData = async () => {
    try{
        await connectDB();
        await Post.create(posts)
        console.log("Data successfully created")
    } catch(err){
        console.log(err)
    }
}

const deleteData = async () => {
    try{
        await connectDB();
        await Post.deleteMany();
        console.log("Data successfully deleted")
    } catch(err){
        console.log(err)
    }
}

if(process.argv[2] === '--import'){
    importData();
} else if(process.argv[2] === '--delete'){
    deleteData()
}