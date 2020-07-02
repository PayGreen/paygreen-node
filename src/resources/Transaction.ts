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
     * @returns {Promise.<Object>} Get object with new transaction created
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
     * @returns {Promise.<Object>} Get object with new transaction created
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
     * @returns {Promise.<Object>} Get object with new transaction created
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
     * @returns {Promise.<Object>} Get object with new transaction created
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
}
