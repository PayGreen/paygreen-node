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

test('It returns the created cash transaction', () => {
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

test('It causes an error during cash transaction', () => {
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

test('It returns the created subscription transaction', () => {
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

test('It causes an error during subscription transaction', () => {
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

test('It returns the created xTime transaction', () => {
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

test('It causes an error during xTime transaction', () => {
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

test('It returns the created tokenize transaction', () => {
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

test('It causes an error during tokenize transaction', () => {
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

test('It returns the details of the transaction', () => {
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

    var transactionId: string = '';
    sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            transactionId = response.dataInfo.data.id;
        })
        .finally(() => {
            sdk.transaction
                .getDetails(transactionId)
                .then((response: IApiResponse) => {
                    checkRightResponse(response);
                    const { dataInfo } = response;

                    expect(dataInfo.data).toHaveProperty('id', transactionId);
                });
        });
});

test('It causes an error during getDetails method', () => {
    return sdk.transaction
        .getDetails('aaaaaaaaaa')
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
        });
});

test('It cancels a cash transaction', () => {
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

    var transactionId: string = '';
    sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            transactionId = response.dataInfo.data.id;
        })
        .finally(() => {
            sdk.transaction
                .cancel(transactionId)
                .then((response: IApiResponse) => {
                    checkRightResponse(response);

                    const { dataInfo } = response;
                    expect(dataInfo.data.result.status).toBe('CANCELLED');
                })
                .finally(() => {
                    sdk.transaction
                        .getDetails(transactionId)
                        .then((response: IApiResponse) => {
                            const { dataInfo } = response;
                            expect(dataInfo.data.result.status).toBe(
                                'CANCELLED',
                            );
                        });
                });
        });
});

test('It causes error during cancellation', () => {
    sdk.transaction.cancel('aaaaaaaaaa').then((response: IApiResponse) => {
        checkWrongResponse(response);
    });
});

test('It returns the transaction with the modified amount ', () => {
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

    var transactionId: string = '';
    return sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            transactionId = response.dataInfo.data.id;
        })
        .finally(() => {
            sdk.transaction
                .modify(transactionId, 9000)
                .then((response: IApiResponse) => {
                    checkRightResponse(response);
                    const { dataInfo } = response;

                    expect(dataInfo.data).toHaveProperty('amount', 9000);
                })
                .finally(() => {
                    sdk.transaction
                        .getDetails(transactionId)
                        .then((response: IApiResponse) => {
                            expect(response.dataInfo.data).toHaveProperty(
                                'amount',
                                9000,
                            );
                        });
                });
        });
});

test('It causes an error during modification of unknow transaction', () => {
    sdk.transaction
        .modify('aaaaaaaaaa', 9000)
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
        });
});

test('It causes an error during confirmation of unknow transaction', () => {
    sdk.transaction
        .confirm('aaaaaaaaaa', 9000, 'Transaction validé !')
        .then((response: IApiResponse) => {
            checkWrongResponse(response);
        });
});

test('It returns the refunded transaction details', () => {
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

    var transactionId: string = '';
    return sdk.transaction
        .createCash(newTransaction)
        .then((response: IApiResponse) => {
            transactionId = response.dataInfo.data.id;
        })
        .finally(() => {
            sdk.transaction
                .refund(transactionId)
                .then((response) => {
                    checkRightResponse(response);
                })
                .finally(() => {
                    sdk.transaction
                        .getDetails(transactionId)
                        .then((response) => {
                            const { dataInfo } = response;

                            checkRightResponse(response);
                            expect(dataInfo.data.result).toHaveProperty(
                                'status',
                            ),
                                expect(dataInfo.data.result.status).toBe(
                                    'REFUNDED',
                                );
                        });
                });
        });
});

test('It causes an error during refund of unknow transaction', () => {
    return sdk.transaction.refund('aaaaaaaaaa').then((response) => {
        checkWrongResponse(response);
        expect(ApiResponse.getErrorMessage(response)).toBe('Not Found');
    });
});

/** CHECK RIGHT RESPONSE |
 * @description - Check that the Api response was a success
 * @param {IApiResponse} response - A response from Api formatted by ApiResponse.formatResponse()
 */
const checkRightResponse = (response: IApiResponse) => {
    const { success, dataInfo } = response;
    expect(success).toBe(true),
        expect(ApiResponse.isSuccessful(response)).toBe(true),
        expect(dataInfo.success).toEqual(true),
        expect(dataInfo.code).toEqual(0);
};

/** CHECK WRONG RESPONSE |
 * @description - Check that the Api response was a failure
 * @param {IApiResponse} response - A response from Api formatted by ApiResponse.formatResponse()
 */
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
