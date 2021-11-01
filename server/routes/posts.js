import express from 'express'
import postMessage from '../models/postMessages.js'

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

router.post('/post', (req, res) => {})
export default router
