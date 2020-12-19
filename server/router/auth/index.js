const express = require('express');
const router = express.Router();
const authUser = require('./_post');
const getMe = require('./_getMe');
const ensureToken = require('./ensureToken');

router.route('/').post(authUser);

router.route('/user').get(ensureToken, getMe);

module.exports = router;
