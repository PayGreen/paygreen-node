---
id: start-sdk
title: Import Sdk
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

Here, you have your first instance of the Sdk. Now to access to API PayGreen, it needs to be configured with your account informations.

- Accounts are created by PayGreen only. To create an account, please email us at tech@paygreen.fr to obtain your ids. You will be provided with a shop id and a private key.

### You can provide these informations one at a time

```Javascript
sdk.shopId(config.shopId);
```

### Or during instanciation through a configuration object

```Javascript
import { Mode, Sdk } from 'paygreen-node';

const localConfig = {
    shopId: process.env.SDK_SHOPID,
    privateKey: process.env.SDK_KEY,
    mode: process.env.SDK_MODE ? Mode[process.env.SDK_MODE] : null,
    host: process.env.SDK_HOST || null,
};

const sdk = new Sdk(localConfig);
```
