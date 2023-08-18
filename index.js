require('dotenv').config()
const express = require('express')

const authRoutes = require('./routes/auth')
const sequelize = require('./utils/db')
const { port } = require('./utils/env')

const app = express()

app.use(express.json())
app.use(authRoutes)

sequelize
    .sync({alter: true})
    .then(() => {
        console.log('db connected');
        app.listen(port, () => {
            console.log('Listening on port', port);
        })
    })