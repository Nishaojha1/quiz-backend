const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://roshan:Wingson223@cluster0.bp6uwbc.mongodb.net/quiz?retryWrites=true&w=majority'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;