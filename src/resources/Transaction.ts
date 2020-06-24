import { MainBuilder } from '../MainBuilder';
import { Transaction as TransactionModel } from '../models';
import { serialize } from 'typescript-json-serializer';

/**
 * Iban Class with all methods to request/modify Ibans infos
 * @property {string} url - main url to build Api requests for this class
 */
export class Transaction extends MainBuilder {
    static url: string = '/payins/transaction';

    /**
     * CREATE CASH | POST /api/{identifiant}/payins/transaction/cash
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<Object>} Get object with new transaction created
     */
    createCash = (newTransaction: TransactionModel): Promise<Object> => {
        const urlExtension: string = '/cash';

        if (newTransaction.buyer == null) {
            throw new Error(
                "Field 'buyer' must be of Buyer Class and not empty to create cash transaction",
            );
        }

        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log('STATUS', res.status, 'DATA', res.data);
            })
            .catch((err) => {});
    };

    /**
     * CREATE SUBSCRIPTION | POST /api/{identifiant}/payins/transaction/subscription
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<Object>} Get object with new transaction created
     */
    createSubscription = (
        newTransaction: TransactionModel,
    ): Promise<Object> => {
        const urlExtension: string = '/subscription';

        if (newTransaction.orderDetails == null) {
            throw new Error(
                "Field 'orderDetails' must be of OrderDetails Class and not empty to create subscription transaction",
            );
        }

        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log('STATUS', res.status, 'DATA', res.data);
            })
            .catch((err) => {});
    };

    /**
     * CREATE XTIME | POST /api/{identifiant}/payins/transaction/xtime
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<Object>} Get object with new transaction created
     */
    createXTime = (newTransaction: TransactionModel): Promise<Object> => {
        const urlExtension: string = '/xtime';

        if (newTransaction.orderDetails == null) {
            throw new Error(
                "Field 'orderDetails' must be of OrderDetails Class and not empty to create xTime transaction",
            );
        }

        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log('STATUS', res.status, 'DATA', res.data);
            })
            .catch((err) => {});
    };

    /**
     * CREATE TOKENIZE | POST /api/{identifiant}/payins/transaction/tokenize
     * @param {TransactionModel} newTransaction - object containing all new transaction informations
     * @returns {Promise.<Object>} Get object with new transaction created
     */
    createTokenize = (newTransaction: TransactionModel): Promise<Object> => {
        const urlExtension: string = '/tokenize';

        if (newTransaction.buyer == null) {
            throw new Error(
                "Field 'buyer' must be of Buyer Class and not empty to create tokenize transaction",
            );
        }

        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log('STATUS', res.status, 'DATA', res.data);
            })
            .catch((err) => {});
    };
}
