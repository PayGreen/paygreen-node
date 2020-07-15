---
id: start-sdk
title: Import SDK
---

This short tutorial will set you up to start using API PayGreen SDK in a few minutes.

## First - Install via Npm

```sh
npm i paygreen-node --save
```

## Import Sdk - ES6 module

```Javascript
import { Sdk } from 'paygreen-node';
```

## Import Sdk - CommonJS2 (in e.g. node.js)

```Javascript
const { Sdk } = require('paygreen-node');
```

## First instanciation

```Javascript
const sdk = new Sdk();
```

Here, you have your first instance of the SDK. Now to access to API PayGreen, it needs to be configured with your account informations.

- Accounts are created by PayGreen only. To create an account, please email us at tech@paygreen.fr to obtain your ids. You will be provided with a shop id and a private key.

### You can provide these informations one at a time

```Javascript
sdk.shopId("1234abcdef");
```

### Or during instanciation through a configuration object

```Javascript
import { Mode, Sdk } from 'paygreen-node';

const localConfig = {
    shopId: "1234abcdef",
    privateKey: "1234-abcd-abcd-1234abcd",
    mode: Mode.DEV,
    host: "http://dev.paygreen.fr",
};

const sdk = new Sdk(localConfig);
```

- You can also use a dotenv environment file to load your environment variables and then, place them in the config object.

```dotenv
SDK_SHOPID = your unique ID here
SDK_KEY = your private key here
SDK_MODE = choose between DEV, PREPROD and PROD (if no mode provided, default mode will be PROD and the requests will automatically be made with url http://localhost)
SDK_HOST = your url here (if no host provided, the requests will automatically be made with url http://localhost)
```

```Javascript
require('dotenv').config('/.env');
import { Mode } from "paygreen-node";

const localConfig = {
    shopId: process.env.SDK_SHOPID,
    privateKey: process.env.SDK_KEY,
    mode: process.env.SDK_MODE ? Mode[process.env.SDK_MODE] : null,
    host: process.env.SDK_HOST || null,
};

module.exports = { localConfig };
```
