const express = require('express');
const app = express();
const db = require('./db/index');
const configs = require('./configs/index')
const routerConsts = require('./consts/index');
const router = require('./routers/index');
const path = require('path');


app.use(express.json());

const cors = require('cors');
app.use(cors()); //cors : farklı domainlerden gelen istekleri kabul etmek için kullanılır.
app.use('/uploads',express.static(path.join(__dirname,'uploads')));


const PORT = process.env.PORT || 5000;
configs.serverConfig.initialServerConfig(); //bu kod satırı, serverConfig.js dosyasındaki initialServerConfig fonksiyonunu çalıştırır. Bu fonksiyon, .env dosyasındaki değişkenleri process.env'e ekler. Bu sayede .env dosyasındaki değişkenlere erişebiliriz.


app.use(`${process.env.APP_PREFIX}${routerConsts.routerPrefix.AUTH}`,router.authRouter.auth)
app.use(`${process.env.APP_PREFIX}${routerConsts.routerPrefix.CATEGORY}`,router.categoryRouter.category)
app.use(`${process.env.APP_PREFIX}${routerConsts.routerPrefix.PRODUCT}`,router.productRouter.product)

db.mongooseConnection.
connectToMongoDB(process.env.MONGODB_HOST, process.env.MONGODB_PORT,
    process.env.MONGODB_COLLECTION, process.env.MONGODB_MIN_POOL_SIZE,
    process.env.MONGODB_MAX_POOL_SIZE,
    process.env.MONGODB_CONNECTION_TIMEOUT).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
}).catch((error) => {
    console.log(error.message)
})