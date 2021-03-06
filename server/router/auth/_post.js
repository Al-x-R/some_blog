require('dotenv').config();
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const validAuth = require('./validate');
const User = require('../../models/User');

const authUser = (req, res, next) =>
  Joi.validate(req.body, validAuth, (err, result) => {
    if (err) {
      res.status(400).send({ error: err.details });
    } else {
      User.findOne(req.body, { password: 0 }, (err, user) => {
        if (err) {
          next(err);
        } else {
          if (!user) {
            res.status(404).send({ error: 'No such user' });
          } else {
            const token = jwt.sign({ user }, process.env.SECRET_KEY);
            res.status(201).send({ token });
          }
        }
      });
    }
  });

module.exports = authUser;
