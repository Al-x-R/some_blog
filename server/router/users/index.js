const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public' });
const User = require('../../models/User');
const ensureToken = require('../auth/ensureToken');
const uploadAvatar = require('./_put');
const createUser = require('./_post');
const getOneUser = require('./_getById');
const getAllUsers = require('./_getAll');
const updateUser = require('./_patch');
const deleteUser = require('./_delete');

const getByIdUser = (req, res, next, id) =>
  User.findOne({ _id: id }, { password: 0 }, (err, user) => {
    if (err) {
      res.status(404).json({ error: 'No such user' });
    } else {
      req.user = user;
      next();
    }
  });

const ensureIsMine = (req, res, next) => {
  if (req.user._id.toString() !== req.authUser._id.toString()) {
    res.status(403).json({ error: 'This is not your user' });
  } else {
    next();
  }
};

router
  .route('/')
  .post(createUser)
  .get(getAllUsers);
router
  .route('/:userId')
  .get(getOneUser)
  .patch(ensureToken, ensureIsMine, updateUser)
  .delete(ensureToken, ensureIsMine, deleteUser);
router
  .route('/upload/:userId')
  .put(ensureToken, ensureIsMine, upload.single('avatar'), uploadAvatar);

router.param('userId', getByIdUser);

module.exports = router;
