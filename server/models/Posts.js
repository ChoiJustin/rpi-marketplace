import mongoose from 'mongoose'

var gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'images',
})

const postSchema = new mongoose.Schema({
    image: bucketName,
    description: String,
    price: Integer,
    condition: String,
})

const Post = mongoose.model('Posts', postSchema)

export default Post