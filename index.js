require('dotenv').config()
const express = require('express')
const { sequelize } = require('./utils/db')
const { port } = require('./utils/env')

const app = express()

app.use(express.json())
const authRoutes = require('./routes/auth')
app.use(authRoutes)

app.listen(port, () => {
    console.log('Listening on port', port);
    sequelize
    .sync()
    .then(() => {
        console.log('db connected');
    })
})