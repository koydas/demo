import express from 'express'
import users, { findUser } from './data/users.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Available endpoints are: '/users', /users/:id")
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = findUser(id)

    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: "User not found" })
    }
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})