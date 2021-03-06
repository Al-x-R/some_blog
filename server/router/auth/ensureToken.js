require('dotenv').config()
const jwt = require('jsonwebtoken')
const	User = require('../../models/User')

module.exports = function(req, res, next) {
	const bearerHeader = req.headers['authorization']
	if (typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(' ')[1]
		jwt.verify(bearer, process.env.SECRET_KEY, (err, decrypted) => {
			if (err) {
				res.status(401).send({ error: 'Unauthorized' })
			} else {
				User.findOne({ _id: decrypted.user._id }, (err, user) => {
					if (err || user === null) {
						res.status(404).send({ error: 'No such user' })
					} else {
						req.authUser = decrypted.user
						next()
					}
				})
			}
		})
	} else {
		res.status(401).send({ error: 'Unauthorized' })
	}
}
