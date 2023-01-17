const express = require('express')
const { createPost, getAllPost } = require('../controllers/postController')

const router = express.Router()

router.route('').get(getAllPost).post(createPost)

module.exports = router