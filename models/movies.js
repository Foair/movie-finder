const mongoose = require('mongoose')
const MovieSchema = require('../schemas/movie')

// 将模式进行编译，生成构造函数（模型）
var Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
