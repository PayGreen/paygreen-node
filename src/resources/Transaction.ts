import { MainBuilder } from '../MainBuilder';
import { Transaction as TransactionModel } from '../models';
import { TransactionType } from '../enums';
import { serialize } from 'typescript-json-serializer';
import { IApiResponse } from '../interfaces';

/**
 * Transaction Class with all methods to request/modify Transactions infos
 * @property {string} url - The main url to build Api requests for this class
 */
export class Transaction extends MainBuilder {
    static url: string = '/payins/transaction';

    /**
     * CREATE | POST /api/{identifiant}/payins/transaction/{cash|subscription|xtime|tokenize}
     * @param {TransactionModel} newTransaction - A Transaction object containing all new transaction informations
     * @param {TransactionType} type - The type of the transaction
     * @returns {Promise.<IApiResponse>} - An object with the new transaction created
     */
    create = (
        newTransaction: TransactionModel,
        type: TransactionType,
    ): Promise<IApiResponse> => {
        let urlExtension: string = '/';
        if (type in TransactionType) {
            urlExtension += TransactionType[type];
        } else {
            throw new Error(
                'Given type not available! Please, use the Enum TransactionType to provide the type of the transaction.',
            );
        }

        const serializedTransaction = serialize(newTransaction);
        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                return this.ApiResponse.formatResponse(
                    true,
                    res.status,
                    res.statusText,
                    res.data,
                );
            })
            .catch(this.ApiResponse.formatError);
    };

    /**
     * GET DETAILS | GET /api/{identifiant}/payins/transaction/{transactionId}
     * @param {string} transactionId - The unique id of a transaction
     * @returns {Promise.<IApiResponse>} - An object with the transaction details
     */
    getDetails = (transactionId: string): Promise<IApiResponse> => {
        const urlExtension: string = '/' + transactionId;

        return this.axiosRequest
            .get(this.buildUrl(Transaction.url) + urlExtension, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return this.ApiResponse.formatResponse(
                    true,
                    res.status,
                    res.statusText,
                    res.data,
                );
            })
            .catch(this.ApiResponse.formatError);
    };

    /**
     * CANCEL | POST /api/{identifiant}/payins/transaction/cancel
     * @param {string} transactionId - unique id of a transaction
     * @returns {Promise.<IApiResponse>} Get object with transaction details
     */
    cancel = (transactionId: string): Promise<IApiResponse> => {
        const urlExtension: string = '/cancel';

        return this.axiosRequest
            .post(this.buildUrl(Transaction.url) + urlExtension, {
                headers: {
                    'Content-Type': 'text/plain',
                },
                id: transactionId,
            })
            .then((res) => {
                return this.ApiResponse.formatResponse(
                    true,
                    res.status,
                    res.statusText,
                    res.data,
                );
            })
            .catch(this.ApiResponse.formatError);
    };

    /**
     * MODIFY | PATCH /api/{identifiant}/payins/transaction/{transactionId}
     * @param {string} transactionId - The unique id of a transaction
     * @param {number} newAmount - The new amount for the transaction
     * @returns {Promise.<IApiResponse>} - An object with the modified transaction
     */
    modify = (
        transactionId: string,
        newAmount: number,
    ): Promise<IApiResponse> => {
        const urlExtension: string = '/' + transactionId;
        const data = {
            amount: newAmount,
        };

        return this.axiosRequest
            .patch(this.buildUrl(Transaction.url) + urlExtension, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return this.ApiResponse.formatResponse(
                    true,
                    res.status,
                    res.statusText,
                    res.data,
                );
            })
            .catch(this.ApiResponse.formatError);
    };

    /**
     * CONFIRM | PUT /api/{identifiant}/payins/transaction/{transactionId}
     * @param {string} transactionId - The unique id of a transaction
     * @param {number} amount - The amount of the transaction, in EUR cents
     * @param {string} message - The message for the confirmation
     * @returns {Promise.<IApiResponse>} - An object with the confirmed transaction
     */
    confirm = (
        transactionId: string,
        amount: number,
        message: string,
    ): Promise<IApiResponse> => {
        const urlExtension: string = '/' + transactionId;
        const data = {
            amount: amount,
            message: message,
        };

        return this.axiosRequest
            .put(this.buildUrl(Transaction.url) + urlExtension, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return this.ApiResponse.formatResponse(
                    true,
                    res.status,
                    res.statusText,
                    res.data,
                );
            })
            .catch(this.ApiResponse.formatError);
    };

    /**
     * REFUND | DELETE /api/{identifiant}/payins/transaction/{transactionId}
     * @param {string} transactionId - The unique id of a transaction
     * @param {number?} amount - The amount of the transaction refunded in EUR cents, if empty then full refund
     * @returns {Promise.<IApiResponse>} - An object with the confirmed transaction
     */
    refund = (
        transactionId: string,
        amount?: number,
    ): Promise<IApiResponse> => {
        const urlExtension: string = '/' + transactionId;

        const data = {};
        if (amount) {
            data['amount'] = amount;
        }

        return this.axiosRequest
            .delete(this.buildUrl(Transaction.url) + urlExtension, {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: { ...data },
            })
            .then((res) => {
                return this.ApiResponse.formatResponse(
                    true,
                    res.status,
                    res.statusText,
                    res.data,
                );
            })
            .catch(this.ApiResponse.formatError);
    };
}
