const Post = require('../../models/User')

const deleteUser = (req, res, next) =>
	req.user.remove(err =>
		err
			? res.status(404).json({ error: 'No such user' })
			: res.json({ message: 'Deleted successfully' })
	)

module.exports = deleteUser
