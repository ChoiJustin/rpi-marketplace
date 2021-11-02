import express from 'express'
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
async function newUser() {
    const User1 = new User({
        username: 'daniel1@rpi.edu',
        password: 'mypassword123',
    })
    await User1.save()
    users = await User.find()
}

router.get('/users', (req, res) => {
    newUser()
    res.send(users)
})

router.post('/post', (req, res) => {})
export default router
