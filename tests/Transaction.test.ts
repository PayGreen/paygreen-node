require('dotenv').config('/.env');
const { localConfig } = require('./config/localConfig');
import { Sdk } from '../src';
import {
    Buyer,
    OrderDetails,
    Transaction,
    Tools,
    ApiResponse,
} from '../src/models';
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

    return sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            checkRightResponse(response);

            const { dataInfo } = response;

            expect(dataInfo.data).toHaveProperty(
                'orderId',
                newTransaction.orderId,
            ),
                expect(dataInfo.data).toHaveProperty(
                    'amount',
                    newTransaction.amount,
                ),
                expect(dataInfo.data).toHaveProperty(
                    'currency',
                    newTransaction.currency,
                ),
                expect(dataInfo.data).toHaveProperty('type', 'CASH'),
                expect(dataInfo.data).toHaveProperty(
                    'paymentType',
                    newTransaction.paymentType,
                ),
                expect(dataInfo.data).toHaveProperty('buyer', {
                    ...newTransaction.buyer,
                    country: '', // API Response set country to '', check for legacy
                    ipAddress: dataInfo.data.buyer.ipAddress, // API Response returns IP Address
                }),
                expect(dataInfo.data).toHaveProperty(
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
            checkRightResponse(response);

            const { dataInfo } = response;

            expect(dataInfo.data).toHaveProperty(
                'orderId',
                newTransaction.orderId,
            ),
                expect(dataInfo.data).toHaveProperty(
                    'amount',
                    newTransaction.amount,
                ),
                expect(dataInfo.data).toHaveProperty(
                    'currency',
                    newTransaction.currency,
                ),
                expect(dataInfo.data).toHaveProperty('type', 'RECURRING'),
                expect(dataInfo.data).toHaveProperty(
                    'paymentType',
                    newTransaction.paymentType,
                ),
                expect(dataInfo.data).toHaveProperty(
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
        checkRightResponse(response);

        const { dataInfo } = response;

        expect(dataInfo.data).toHaveProperty('orderId', newTransaction.orderId),
            expect(dataInfo.data).toHaveProperty(
                'amount',
                newTransaction.amount,
            ),
            expect(dataInfo.data).toHaveProperty(
                'currency',
                newTransaction.currency,
            ),
            expect(dataInfo.data).toHaveProperty('type', 'XTIME'),
            expect(dataInfo.data).toHaveProperty(
                'paymentType',
                newTransaction.paymentType,
            ),
            expect(dataInfo.data).toHaveProperty(
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
            checkRightResponse(response);

            const { dataInfo } = response;

            expect(dataInfo.data).toHaveProperty(
                'orderId',
                newTransaction.orderId,
            ),
                expect(dataInfo.data).toHaveProperty(
                    'amount',
                    newTransaction.amount,
                ),
                expect(dataInfo.data).toHaveProperty(
                    'currency',
                    newTransaction.currency,
                ),
                expect(dataInfo.data).toHaveProperty('type', 'TOKENIZE'),
                expect(dataInfo.data).toHaveProperty(
                    'paymentType',
                    newTransaction.paymentType,
                ),
                expect(dataInfo.data).toHaveProperty('buyer', {
                    ...newTransaction.buyer,
                    ipAddress: dataInfo.data.buyer.ipAddress, // API Response returns IP Address
                }),
                expect(dataInfo.data).toHaveProperty(
                    'metadata',
                    newTransaction.metadata,
                );
        });
});

const checkRightResponse = (response: any) => {
    const { success, dataInfo } = response;
    expect(success).toBe(true),
        expect(ApiResponse.isSuccessful(response)).toBe(true),
        expect(dataInfo.success).toEqual(true),
        expect(dataInfo.code).toEqual(0);
};

const checkWrongResponse = (response: any) => {
    const { success, dataInfo } = response;
    expect(success).toBe(false),
        expect(
            ApiResponse.isInvalid(response) ||
                ApiResponse.causedAnError(response),
        ).toBe(true),
        expect(dataInfo.success).toEqual(false);
};
