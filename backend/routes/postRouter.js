const express = require('express')
const { createPost, getAllPost, deletePost, getSinglePost } = require('../controllers/postController')

const router = express.Router()

router.route('').get(getAllPost).post(createPost);
router.route('/:id').get(getSinglePost).delete(deletePost)

module.exports = router