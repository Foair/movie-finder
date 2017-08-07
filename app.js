const path = require('path')
const mongoose = require('mongoose')
const _ = require('underscore')

const express = require('express')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')

const Movie = require('./models/movies')

// 使用原生 Promise 替换 mongoose 的 Promise
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/movies', {
    useMongoClient: true
})

// 从终端的环境变量中获取端口号
// 使用 PORT=8000 node app.js（Linux 和 macOS）
// 或者先使用 export PORT=8000，再输入 node app.js（Linux 和 macOS）
// 使用 set PORT=8000&&node app.js，也可以拆开写成两个命令（Windows）
var port = process.env.PORT || 8000
var app = express()

// 设置视图根目录
app.set('views', './views/pages')
// 设置模板引擎
app.set('view engine', 'jade')

// 解析 POST 方法中的表单数据
app.use(require('body-parser').urlencoded({ extended: true }))
// 静态文件根目录
app.use(serveStatic('public'))

// 使用 Moment.js
app.locals.moment = require('moment')

app.listen(port)

// 自定义 404 错误函数
function miss(res, err) {
    res.render('miss', {
        title: '出现错误',
        err: '对不起，找不到该页面 (╯︵╰)'
    })
}

// 首页
app.get('/', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err)
            console.log(err)

        res.render('index', {
            title: 'Movie Finder',
            movies: movies
        })
    })
})

// 详情页
app.get('/movie/:id', function (req, res) {
    var id = req.params.id
    Movie.findById(id, function (err, movie) {
        if (err) {
            miss(res, err)
            return
        }
        res.render('detail', {
            title: movie.title,
            movie: movie
        })
    })
})

// 更新电影信息
app.get('/admin/update/:id', function (req, res) {
    var id = req.params.id
    if (id) {
        Movie.findById(id, function (err, movie) {
            if (err) {
                miss(res, err)
                return
            }
            res.render('edit', {
                title: '修改信息',
                movie: movie
            })
        })
    }
})

// 添加新电影的 API
app.post('/admin/new', function (req, res) {
    var id = req.body.movie._id
    var movieObj = req.body.movie
    var _movie
    if (id !== 'undefined') {
        Movie.findById(id, function (err, movie) {
            if (err) {
                miss(res, err)
                return
            }
            // 用新字段替换掉原来的字段
            _movie = _.extend(movie, movieObj)
            _movie.save(function (err, movie) {
                if (err)
                    console.err(err)
                res.redirect('/movie/' + movie._id)
            })
        })
    }
    else {
        _movie = new Movie({
            director: movieObj.director,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        })
        _movie.save(function (err, movie) {
            if (err)
                console.err(err)
            res.redirect('/movie/' + movie._id)
        })
    }
})

// 后台录入
app.get('/admin/new', function (req, res) {
    res.render('edit', {
        title: '电影录入',
        movie: {
            title: '',
            director: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    })
})

// 列表页面
app.get('/admin/list', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err)
            console.log(err)
        res.render('list', {
            title: '电影列表',
            movies: movies
        })
    })
})

// 从列表中删除元素
app.delete('/admin/list', function (req, res) {
    var id = req.query.id
    if (id) {
        Movie.remove({ _id: id }, function (err, movie) {
            if (err)
                console.log(err)
            else
                res.json({ success: 1 })
        })
    }
})

console.log('Server is running at http://localhost:' + port + '/')
