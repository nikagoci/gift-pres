const Post = require("../models/postModel")

exports.getAllPost = async(req, res) => {
    try{
        const posts = await Post.find();

        res.status(200).json({
            status: "success",
            quantity: posts.length,
            posts
        })
    } catch(err){
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.createPost = async(req, res) => {
    try{    
        const newPost = await Post.create(req.body)

        res.status(201).json({
            status: 'success',
            post: newPost
        })
    } catch(err){
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}