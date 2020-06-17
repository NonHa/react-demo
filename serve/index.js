const express = require('express')
const debug = require('debug')('my-application')
const bodyParse = require('body-parser')
const users = require('./routers/users')
const app = express()

app.use(bodyParse.json())
app.use('/api/users', users)
app.listen(3030, (req, res) => {
    debug("服务器运行在3030端口");
})