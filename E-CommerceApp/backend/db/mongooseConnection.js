const mongoose = require('mongoose')
exports.connectToMongoDB = async(host,port,collection,minPoolSize,maxPoolSize,connectTimeoutMS) => { 
    try {
        await mongoose.connect(`mongodb://${host}:${port}/${collection}`, {
            compressors:"zlib",
            autoIndex: true,
            minPoolSize,
            maxPoolSize,
            connectTimeoutMS,
         })
         console.log("Connected to MongoDB")    
    } catch (error) {
        throw new Error(error.message)
    }
}