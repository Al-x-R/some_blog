const Joi = require('joi');
const validateEdit = require('./validateEdit');
const User = require('../../models/User');

const updateUser = (req, res, next) => {
  Joi.validate(req.body, validateEdit, (err, result) => {
    if (err) {
      res.status(400).send({ error: err.details });
    } else {
      User.findOneAndUpdate(
        req.user._id,
        req.body,
        { new: true, fields: { password: 0 } },
        (err, user) => (err ? next(err) : res.json(user)),
      );
    }
  });
};

module.exports = updateUser;
