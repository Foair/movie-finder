const mongoose = require('mongoose')

// Movie 的结构概要（模式）
var MovieSchema = new mongoose.Schema({
    title: String,
    poster: String,
    director: String,
    country: String,
    language: String,
    year: Number,
    summary: String,
    flash: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

// 为 save 方法添加额外的工作
MovieSchema.pre('save', function (next) {
    // 如果是新创建的数据，则更新时间和添加时间都设置为当前时间
    if (this.isNew)
        this.meta.createAt = Date.now()
    this.meta.updateAt = Date.now()
    next()
})

// 定义默认的方法
MovieSchema.statics = {
    // 取出数据库中所有数据，并按照更新时间排序
    fetch: function (callback) {
        return this.find({}).sort('meta.updateAt').exec(callback)
    },
    // 通过 ID 找到一条数据
    findById: function (id, callback) {
        return this.findOne({ _id: id }).exec(callback)
    }
}

module.exports = MovieSchema
