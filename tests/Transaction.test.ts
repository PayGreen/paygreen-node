require('dotenv').config('/.env');
const { localConfig } = require('./config/localConfig');
import { Sdk } from '../src';
import { Buyer, OrderDetails, Transaction, ApiResponse } from '../src/models';
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

test('it returns the created cash transaction', () => {
    const newTransaction = new Transaction();
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';
    newTransaction.paymentType = 'CB';
    newTransaction.notifiedUrl = 'http://example.com/retour-server';
    newTransaction.buyer = buyer;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.ttl = 'PT1M';

    return sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            const { dataInfo } = response;

            checkRightResponse(response);
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
                expect(dataInfo.data).toHaveProperty(
                    'metadata',
                    newTransaction.metadata,
                );
        });
});

test('it cause an error during cash transaction', () => {
    const newTransaction = new Transaction();
    // No orderId for this Transaction
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';

    return sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
            expect(ApiResponse.getErrorMessage(response)).toBe(
                "Field 'orderId' required",
            );
        });
});

test('it returns the created subscription transaction', () => {
    const newTransaction = new Transaction();
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';
    newTransaction.paymentType = 'CB';
    newTransaction.notifiedUrl = 'http://example.com/retour-server';
    newTransaction.buyer = buyer;
    newTransaction.orderDetails = orderDetails;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.ttl = 'PT1M';

    return sdk.transaction
        .createSubscription(newTransaction)
        .then((response: IApiResponse) => {
            const { dataInfo } = response;

            checkRightResponse(response);
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

test('it cause an error during subscription transaction', () => {
    const newTransaction = new Transaction();
    // No orderId for this Transaction
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';

    return sdk.transaction
        .createSubscription(newTransaction)
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
            expect(ApiResponse.getErrorMessage(response)).toBe(
                "Field 'orderId' required",
            );
        });
});

test('it returns the created xTime transaction', () => {
    const newTransaction = new Transaction();
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';
    newTransaction.paymentType = 'CB';
    newTransaction.notifiedUrl = 'http://example.com/retour-server';
    newTransaction.buyer = buyer;
    newTransaction.orderDetails = orderDetails;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.ttl = 'PT1M';

    return sdk.transaction
        .createXTime(newTransaction)
        .then((response: IApiResponse) => {
            const { dataInfo } = response;

            checkRightResponse(response);
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

test('it cause an error during xTime transaction', () => {
    const newTransaction = new Transaction();
    // No orderId for this Transaction
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';

    return sdk.transaction
        .createXTime(newTransaction)
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
            expect(ApiResponse.getErrorMessage(response)).toBe(
                "Field 'orderId' required",
            );
        });
});

test('it returns the created tokenize transaction', () => {
    const newTransaction = new Transaction();
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';
    newTransaction.paymentType = 'CB';
    newTransaction.notifiedUrl = 'http://example.com/retour-server';
    newTransaction.buyer = buyer;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.ttl = 'PT1M';

    return sdk.transaction
        .createTokenize(newTransaction)
        .then((response: IApiResponse) => {
            const { dataInfo } = response;

            checkRightResponse(response);
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
                expect(dataInfo.data).toHaveProperty(
                    'metadata',
                    newTransaction.metadata,
                );
        });
});

test('it cause an error during tokenize transaction', () => {
    const newTransaction = new Transaction();
    // No orderId for this Transaction
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';

    return sdk.transaction
        .createTokenize(newTransaction)
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
            expect(ApiResponse.getErrorMessage(response)).toBe(
                "Field 'orderId' required",
            );
        });
});

test('it returns the details of the transaction', () => {
    const newTransaction = new Transaction();
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';
    newTransaction.paymentType = 'CB';
    newTransaction.notifiedUrl = 'http://example.com/retour-server';
    newTransaction.buyer = buyer;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.ttl = 'PT1M';

    const transactionId: Array<string> = [];
    sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            transactionId.push(response.dataInfo.data.id);
        })
        .finally(() => {
            sdk.transaction
                .getDetails(transactionId[0])
                .then((response: IApiResponse) => {
                    checkRightResponse(response);
                    const { dataInfo } = response;

                    expect(dataInfo.data).toHaveProperty(
                        'id',
                        transactionId[0],
                    );
                });
        });
});

test('it causes an error during getDetails method', () => {
    return sdk.transaction
        .getDetails('aaaaaaaaaa')
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
        });
});

test('it cancel a cash transaction', () => {
    const newTransaction = new Transaction();
    newTransaction.orderId = `oid${Math.floor(Math.random() * 10000)}`;
    newTransaction.amount = 1450;
    newTransaction.currency = 'EUR';
    newTransaction.paymentType = 'CB';
    newTransaction.notifiedUrl = 'http://example.com/retour-server';
    newTransaction.buyer = buyer;
    newTransaction.metadata = {
        orderId: `oid${Math.floor(Math.random() * 10000)}`,
        display: '0',
    };
    newTransaction.ttl = 'PT1M';

    const transactionId: Array<string> = [];
    sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            transactionId.push(response.dataInfo.data.id);
        })
        .finally(() => {
            sdk.transaction
                .cancel(transactionId[0])
                .then((response: IApiResponse) => {
                    checkRightResponse(response);

                    const { dataInfo } = response;
                    expect(dataInfo.data.result.status).toBe('CANCELLED');
                });
        });
});

test('it causes error during cancellation', () => {
    sdk.transaction.cancel('aaaaaaaaaa').then((response: IApiResponse) => {
        checkWrongResponse(response);
    });
});

// CHECK'S METHODS
const checkRightResponse = (response: any) => {
    const { success, dataInfo } = response;
    expect(success).toBe(true),
        expect(ApiResponse.isSuccessful(response)).toBe(true),
        expect(dataInfo.success).toEqual(true),
        expect(dataInfo.code).toEqual(0);
};

const checkWrongResponse = (response: IApiResponse) => {
    const { success, dataInfo } = response;
    expect(success).toBe(false),
        expect(
            ApiResponse.isInvalid(response) ||
                ApiResponse.causedAnError(response),
        ).toBe(true);
    if (dataInfo.success) {
        expect(dataInfo.success).toEqual(false);
    }
};
