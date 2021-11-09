import express, { request } from 'express'
import postMessage from '../models/postMessages.js'
import User from '../models/Users.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('WORKING')
})

router.get('/post', async (req, res) => {
    try {
        const postMessages = await postMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

var users
async function newUser(user, pass) {
    const User1 = new User({
        username: user,
        password: pass,
    })
    await User1.save()
    users = await User.find()
}

router.post('/users', (req, res) => {

    let user = req.body.username;
    let pass = req.body.password;
    newUser(user, pass);

    res.send(users);
})
export default router
