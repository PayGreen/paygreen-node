require('dotenv').config('/.env');
const { localConfig } = require('./config/localConfig');
import { Sdk } from '../src';
import { Buyer, OrderDetails, Transaction, Tools } from '../src/models';
import { Country } from '../src/enums';
import { IApiResponse } from '../src/interfaces';

const sdk = new Sdk(localConfig);

const buyer = new Buyer(
    `bid${Math.floor(Math.random() * 10000)}`,
    'Lefebvre',
    'Pierrick',
    'pierrick.lefebvre@paygreen.fr',
    Country.FR,
    'PayGreen',
);

const orderDetails = new OrderDetails(40, 3, 0, new Date().toISOString(), 0);

const transactionBase = new Transaction();
transactionBase.amount = 1450;
transactionBase.currency = 'EUR';
transactionBase.paymentType = 'CB';
transactionBase.notifiedUrl = 'http://example.com/retour-server';
transactionBase.ttl = 'PT1M';

test('it returns the created cash transaction', () => {
    const newTransaction = transactionBase;
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.buyer = buyer;

    Tools.verify(newTransaction).then((res) => {
        expect(res).toBe('Validation succeed');
    });

    return sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            const { status, message, data } = response;

            expect(status).toEqual(200),
                expect(message).toBe('OK'),
                expect(data.success).toEqual(true),
                expect(data.code).toEqual(0),
                expect(data.data).toHaveProperty(
                    'orderId',
                    newTransaction.orderId,
                ),
                expect(data.data).toHaveProperty(
                    'amount',
                    newTransaction.amount,
                ),
                expect(data.data).toHaveProperty(
                    'currency',
                    newTransaction.currency,
                ),
                expect(data.data).toHaveProperty('type', 'CASH'),
                expect(data.data).toHaveProperty(
                    'paymentType',
                    newTransaction.paymentType,
                ),
                expect(data.data).toHaveProperty('buyer', {
                    ...newTransaction.buyer,
                    country: '', // API Response set country to '', check for legacy
                    ipAddress: data.data.buyer.ipAddress, // API Response returns IP Address
                }),
                expect(data.data).toHaveProperty(
                    'metadata',
                    newTransaction.metadata,
                );
        });
});

test('it returns the created subscription transaction', () => {
    const newTransaction = transactionBase;
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.orderDetails = orderDetails;

    return sdk.transaction
        .createSubscription(newTransaction)
        .then((response: any) => {
            const { status, message, data } = response;

            expect(status).toEqual(200),
                expect(message).toBe('OK'),
                expect(data.success).toEqual(true),
                expect(data.code).toEqual(0),
                expect(data.data).toHaveProperty(
                    'orderId',
                    newTransaction.orderId,
                ),
                expect(data.data).toHaveProperty(
                    'amount',
                    newTransaction.amount,
                ),
                expect(data.data).toHaveProperty(
                    'currency',
                    newTransaction.currency,
                ),
                expect(data.data).toHaveProperty('type', 'RECURRING'),
                expect(data.data).toHaveProperty(
                    'paymentType',
                    newTransaction.paymentType,
                ),
                expect(data.data).toHaveProperty(
                    'metadata',
                    newTransaction.metadata,
                );
        });
});

test('it returns the created xTime transaction', () => {
    const newTransaction = transactionBase;
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.orderDetails = orderDetails;

    return sdk.transaction.createXTime(newTransaction).then((response: any) => {
        const { status, message, data } = response;

        expect(status).toEqual(200),
            expect(message).toBe('OK'),
            expect(data.success).toEqual(true),
            expect(data.code).toEqual(0),
            expect(data.data).toHaveProperty('orderId', newTransaction.orderId),
            expect(data.data).toHaveProperty('amount', newTransaction.amount),
            expect(data.data).toHaveProperty(
                'currency',
                newTransaction.currency,
            ),
            expect(data.data).toHaveProperty('type', 'XTIME'),
            expect(data.data).toHaveProperty(
                'paymentType',
                newTransaction.paymentType,
            ),
            expect(data.data).toHaveProperty(
                'metadata',
                newTransaction.metadata,
            );
    });
});

test('it returns the created tokenize transaction', () => {
    const newTransaction = transactionBase;
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.buyer = buyer;

    return sdk.transaction
        .createTokenize(newTransaction)
        .then((response: any) => {
            const { status, message, data } = response;

            expect(status).toEqual(200),
                expect(message).toBe('OK'),
                expect(data.success).toEqual(true),
                expect(data.code).toEqual(0),
                expect(data.data).toHaveProperty(
                    'orderId',
                    newTransaction.orderId,
                ),
                expect(data.data).toHaveProperty(
                    'amount',
                    newTransaction.amount,
                ),
                expect(data.data).toHaveProperty(
                    'currency',
                    newTransaction.currency,
                ),
                expect(data.data).toHaveProperty('type', 'TOKENIZE'),
                expect(data.data).toHaveProperty(
                    'paymentType',
                    newTransaction.paymentType,
                ),
                expect(data.data).toHaveProperty('buyer', {
                    ...newTransaction.buyer,
                    ipAddress: data.data.buyer.ipAddress, // API Response returns IP Address
                }),
                expect(data.data).toHaveProperty(
                    'metadata',
                    newTransaction.metadata,
                );
        });
});

/*
test('it returns the confirmed transaction', () => {
    return sdk.transaction.confirm(transactionTest).then((data: any) => {});
});

test('it returns the modified transaction', () => {
    return sdk.transaction.modify(transactionTest).then((data: any) => {});
});

test('it returns the canceled transaction', () => {
    return sdk.transaction.cancel(transactionTest).then((data: any) => {});
});

test('it returns the details of the transaction', () => {
    return sdk.transaction.getDetails(transactionTest).then((data: any) => {});
});
*/
