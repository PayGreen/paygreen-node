require('dotenv').config('/.env');
const { localConfig } = require('./config/localConfig');
import { Sdk } from '../src';
import { ApiResponse } from '../src/models';
import { IApiResponse } from '../src/interfaces';

const sdk = new Sdk(localConfig);

test('It returns all payment types available', () => {
    return sdk.paymentType.getPaymentType().then((response) => {
        const { dataInfo } = response;

        checkRightResponse(response);
        dataInfo.data.forEach((e) => {
            expect(e).toHaveProperty('currency'),
                expect(e).toHaveProperty('paymentType'),
                expect(e).toHaveProperty('availablePaymentMode');
        });
    });
});

test('It returns all payment types available for paymentype equal to TRD', () => {
    return sdk.paymentType.getPaymentType('TRD').then((response) => {
        const { dataInfo } = response;

        checkRightResponse(response);
        dataInfo.data.forEach((e) => {
            expect(e).toHaveProperty('currency'),
                expect(e).toHaveProperty('paymentType'),
                expect(e.paymentType).toBe('TRD'),
                expect(e).toHaveProperty('availablePaymentMode'),
                expect(e.availablePaymentMode).toContain('CASH');
        });
    });
});

test('It returns all payment types available for currency equal to EUR', () => {
    return sdk.paymentType.getPaymentType(undefined, 'EUR').then((response) => {
        const { dataInfo } = response;

        checkRightResponse(response);
        dataInfo.data.forEach((e) => {
            expect(e).toHaveProperty('currency'),
                expect(e.currency).toBe('EUR'),
                expect(e).toHaveProperty('paymentType'),
                expect(e).toHaveProperty('availablePaymentMode');
        });
    });
});

test('It causes an error because of unavailable currency', () => {
    return sdk.paymentType.getPaymentType(undefined, 'USD').then((response) => {
        checkWrongResponse(response);
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
        expect(dataInfo.code).toEqual(0),
        expect(ApiResponse.getErrorMessage(response)).toBe('no error');
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
