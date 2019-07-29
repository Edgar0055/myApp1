const Category = require('../models/Category')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    try {
        const categories = await Category.find({ user: req.user.id })
        res.status(200).json({ categories })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = function(req, res) {

}

module.exports.remove = function(req, res) {

}

module.exports.create = function(req, res) {

}

module.exports.update = function(req, res) {

}