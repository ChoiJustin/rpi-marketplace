import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model('Users', userSchema)

export default User
