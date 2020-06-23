require('dotenv').config('/.env');
const { Mode } = require('../../src/enums/Mode');

const localConfig = {
    shopId: process.env.SDK_SHOPID,
    privateKey: process.env.SDK_KEY,
    mode: process.env.SDK_MODE ? Mode[process.env.SDK_MODE] : null,
    host: process.env.SDK_HOST || null,
};

module.exports = { localConfig };