const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public' });
const Post = require('../../models/Post');
const ensureToken = require('../auth/ensureToken');
const uploadImage = require('./_put');
const createPost = require('./_post');
const deletePost = require('./_delete');
const updatePost = require('./_patch');
const getOnePost = require('./_getById');
const getAllPosts = require('./_getAll');

const getByIdPost = (req, res, next, id) =>
  Post.findOne({ _id: id }, (err, post) => {
    if (err) {
      res.json({ error: 'No such post' });
    } else {
      req.post = post;
      next();
    }
  });

const ensureIsMine = (req, res, next) => {
  if (req.post.postedBy.toString() !== req.authUser._id.toString()) {
    res.status(403).json({ error: 'This is not your post' });
  } else {
    next();
  }
};

router
  .route('/')
  .post(ensureToken, createPost)
  .get(getAllPosts);
router
  .route('/:postId')
  .get(getOnePost)
  .patch(ensureToken, ensureIsMine, updatePost)
  .delete(ensureToken, ensureIsMine, deletePost);
router
  .route('/upload/:postId')
  .put(ensureToken, ensureIsMine, upload.single('image'), uploadImage);

router.param('postId', getByIdPost);

module.exports = router;
