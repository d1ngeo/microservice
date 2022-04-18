const Groups = require('../models/groups');
const { Op } = require('sequelize');


const getall = async (req, res, next) => {

	let { namePlataform , category  } = req.query;

	if (namePlataform) {

		try {
			const groups = await Groups.findAll({
				where: { namePlataform: { [Op.iLike]: `%${namePlataform}%` } },
			});
			return res.json(groups);
		} catch (err) {
			return next(err);
		}
	} else if (category) {

		try {
			const groups = await Groups.findAll({
				where: { category: { [Op.iLike]: `%${category}%` } },
			});
			return res.json(groups);
		} catch (err) {
			return next(err);
		}
	}

	try {
		const groups_1 = await Groups.findAll({});
		return res.json(groups_1);
	} catch (err_1) {
		return next(err_1);
	}

};

module.exports = { getall }