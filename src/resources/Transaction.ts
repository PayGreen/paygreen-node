import { MainBuilder } from '../MainBuilder';
import { Transaction as TransactionModel } from '../models';
import { serialize } from 'typescript-json-serializer';
import { IApiResponse } from '../interfaces';

/**
 * Transaction Class with all methods to request/modify Transactions infos
 * @property {string} url - main url to build Api requests for this class
 */
export class Transaction extends MainBuilder {
    static url: string = '/payins/transaction';

    /**
     * CREATE CASH | POST /api/{identifiant}/payins/transaction/cash
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<IApiResponse>} Get object with new transaction created
     */
    createCash = (newTransaction: TransactionModel): Promise<IApiResponse> => {
        const urlExtension: string = '/cash';
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
     * CREATE SUBSCRIPTION | POST /api/{identifiant}/payins/transaction/subscription
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<IApiResponse>} Get object with new transaction created
     */
    createSubscription = (
        newTransaction: TransactionModel,
    ): Promise<IApiResponse> => {
        const urlExtension: string = '/subscription';
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
     * CREATE XTIME | POST /api/{identifiant}/payins/transaction/xtime
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<IApiResponse>} Get object with new transaction created
     */
    createXTime = (newTransaction: TransactionModel): Promise<IApiResponse> => {
        const urlExtension: string = '/xtime';
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
     * CREATE TOKENIZE | POST /api/{identifiant}/payins/transaction/tokenize
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<IApiResponse>} Get object with new transaction created
     */
    createTokenize = (
        newTransaction: TransactionModel,
    ): Promise<IApiResponse> => {
        const urlExtension: string = '/tokenize';
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
     * @param {string} transactionId - unique id of a transaction
     * @returns {Promise.<IApiResponse>} Get object with transaction details
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
     * @param {string} transactionId - unique id of a transaction
     * @param {number} newAmount - new amount of the transaction
     * @returns {Promise.<IApiResponse>} Get object with the modified amount
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
}
