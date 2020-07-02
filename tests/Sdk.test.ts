require('dotenv').config('/.env');
import { Mode, Sdk } from '../src';

const config = {
    shopId: process.env.SDK_SHOPID,
    privateKey: process.env.SDK_KEY,
    mode: Mode.DEV,
};
const sdk = new Sdk(config);

test('Sdk has properties _identity', () => {
    expect(sdk).toHaveProperty('_identity');
});

test('Sdk constructor initializes correctly with all the parameters', () => {
    expect(sdk.shopId).toBe(process.env.SDK_SHOPID);
    expect(sdk.privateKey).toBe(process.env.SDK_KEY);
    expect(sdk.mode).toEqual(0);
});

const sdk2 = new Sdk();

test('Sdk constructor initializes correctly with default value for mode', () => {
    expect(sdk2.mode).toEqual(2);
});
