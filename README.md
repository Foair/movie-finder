# Movie Finder

一个慕课网课程的实战项目。基于 Node.js 和 MongoDB。

## 参考课程

Node.js + MongoDB 建站攻略（一期）
http://www.imooc.com/learn/75

~~Node.js 建站攻略（二期）——网站升级~~
~~http://www.imooc.com/learn/197~~

## 项目介绍

一个用于显示和管理电影数据的 web 开发项目，采用 MIT 协议许可。

### 用户界面

主页：http://localhost:8000/

![Movie Finder.png](https://i.loli.net/2017/08/07/5987bedec092f.png)

电影信息：http://localhost:8000/movie/(id)

![你的名字。](https://i.loli.net/2017/08/07/5987b51511707.png)

![你的名字。-2](https://i.loli.net/2017/08/07/5987b514d1b04.png)

### 管理界面

电影列表：http://localhost:8000/admin/list

![电影列表](https://i.loli.net/2017/08/07/5987b5147075d.png)

添加新电影：http://localhost:8000/admin/new

![电影录入](https://i.loli.net/2017/08/07/5987b5142ca09.png)

更新电影：http://localhost:8000/admin/update/(id)

![修改信息](https://i.loli.net/2017/08/07/5987b513d1dd7.png)

## 如何使用

1. 安装 Node.js：https://nodejs.org/
2. 项目根目录 `nmp install`
3. 项目根目录 `bower install`
4. 安装 MongoDB：https://www.mongodb.com/download-center
5. 项目根目录 `node app.js`
6. 打开浏览器访问

## 依赖项

Node.js - Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。

Express - 基于 Node.js 平台，快速、开放、极简的 web 开发框架。

Jade - Pug is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. For bug reports, feature requests and questions, open an issue. For discussion join the chat room.

MongoDB - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need

Bower - Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.
Mongoose - elegant mongodb object modeling for node.js

Bootstrap - Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

jQuery - jQuery is a fast, small, and feature-rich JavaScript library.
Moment.js - Parse, validate, manipulate, and display dates and times in JavaScript.

> 备注：Jade 现已更名为 Pug，不过在教程中依然使用 Jade。

## 目录介绍

`views/`：项目视图（模板）。
`public/`：网站根目录（共有目录），静态资源文件。
`models/`：Mongoose 生成的模型。
`schemas/`：Mongoose 生成的模式。
`others/`：存放项目主体以外的内容。
`public/libs/`：Bower 依赖安装目录。

## 其他文件信息

`others/movie.eps`、`favicon.ico` 信息

来源：http://www.iconfont.cn/
作者：[minihope168](http://www.iconfont.cn/user/detail?&uid=23370)
制作：[Foair](https://foair.com/)

`others/Mongo-2017-08-07.json`

MongoDB 数据文件（可以直接导入 MongoDB，也可以直接用于 JavaScript）

