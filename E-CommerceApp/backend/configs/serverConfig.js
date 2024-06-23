const dotEnv = require('dotenv');

exports.initialServerConfig = () => { 
    dotEnv.config();
}