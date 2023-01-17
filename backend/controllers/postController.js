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

exports.getSinglePost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id)

        res.status(200).json({
            status: "success",
            post
        })
    } catch(err){
        res.status(404).json({
            status: 'Fail',
            message: err.message,
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

exports.deletePost = async(req, res) => {
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            post: deletedPost
        })

    } catch(err){
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }

}