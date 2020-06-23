import { MainBuilder } from '../MainBuilder';
import { Transaction as TransactionModel } from '../models';
import { serialize } from 'typescript-json-serializer';

/**
 * Iban Class with all methods to request/modify Ibans infos
 * @property {string} url - main url to build Api requests for this class
 * @property {string} urlExtension - url Extension to build Iban Individual Request
 */
export class Transaction extends MainBuilder {
    static url: string = '/payins/transaction';

    /**
     * CREATE CASH | POST /api/{identifiant}/payins/transaction/cash
     */
    createCash = (newTransaction: TransactionModel): Promise<Object> => {
        const urlExtension: string = '/cash';
        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * CREATE SUBSCRIPTION | POST /api/{identifiant}/payins/transaction/subscription
     */
    createSubscription = (
        newTransaction: TransactionModel,
    ): Promise<Object> => {
        const urlExtension: string = '/subscription';
        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * CREATE XTIME | POST /api/{identifiant}/payins/transaction/xtime
     */
    createXTime = (newTransaction: TransactionModel): Promise<Object> => {
        const urlExtension: string = '/xtime';
        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * CREATE TOKENIZE | POST /api/{identifiant}/payins/transaction/tokenize
     */
    createTokenize = (newTransaction: TransactionModel): Promise<Object> => {
        const urlExtension: string = '/tokenize';
        const serializedTransaction = serialize(newTransaction);

        return this.axiosRequest
            .post(
                this.buildUrl(Transaction.url) + urlExtension,
                serializedTransaction,
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    //    /**
    //     * CREATE ONE | /account/me/user/{username}/rib
    //     * @param {IbanModel} newIban - object containing all new iban information, only Admin can create Iban
    //     * @param {string?} userNameValue - Optional, by default UserName used will be the one from identity
    //     * @returns {Promise.<IApiResponse>} Get object with new iban created.
    //     */
    //    create = (
    //        newIban: IbanModel,
    //        userNameValue?: string,
    //    ): Promise<IApiResponse> => {
    //        const serializedIban = serialize(newIban);
    //        return this.axiosRequest
    //            .post(
    //                this.buildIbanUrl(this.buildUrl(true, Iban.url, userNameValue)),
    //                serializedIban,
    //            )
    //            .then((res) => {
    //                return this.ApiResponse.formatResponse(
    //                    true,
    //                    res.data,
    //                    res.status,
    //                );
    //            })
    //            .catch(this.ApiResponse.formatError);
    //    };
    //
    //    /**
    //     * GET ONE | /account/me/user/{username}/rib/{iban_id}
    //     * @param {number} ibanId - unique number to identify the iban
    //     * @param {string?} userNameValue - Optional, by default UserName used will be the one from identity, only Admin
    //     * can use a specific UserNameValue to get an iban of a different user of the company account
    //     * @returns {Promise.<IApiResponse>} Get information about a specific iban
    //     */
    //    getOne = (
    //        ibanId: number,
    //        userNameValue?: string,
    //    ): Promise<IApiResponse> => {
    //        return this.axiosRequest
    //            .get(
    //                this.buildIbanUrl(
    //                    this.buildUrl(true, Iban.url, userNameValue),
    //                    ibanId,
    //                ),
    //            )
    //            .then((res) => {
    //                return this.ApiResponse.formatResponse(
    //                    true,
    //                    res.data,
    //                    res.status,
    //                );
    //            })
    //            .catch(this.ApiResponse.formatError);
    //    };
    //
    //    /**
    //     * SET ONE | /account/me/user/{username}/rib/{iban_id}
    //     * @param {number} ibanId - unique number to identify the iban
    //     * @param {string?} userNameValue - Optional, by default UserName used will be the one from identity, only Admin can change default iban.
    //     * @returns {Promise.<IApiResponse>} - Set one iban as default one.
    //     */
    //    setAsDefault = (
    //        ibanId: number,
    //        userNameValue?: string,
    //    ): Promise<IApiResponse> => {
    //        return this.axiosRequest
    //            .patch(
    //                this.buildIbanUrl(
    //                    this.buildUrl(true, Iban.url, userNameValue),
    //                    ibanId,
    //                ),
    //            )
    //            .then((res) => {
    //                return this.ApiResponse.formatResponse(
    //                    true,
    //                    res.data,
    //                    res.status,
    //                );
    //            })
    //            .catch(this.ApiResponse.formatError);
    //    };
    //
    //    /**
    //     * DELETE ONE | /account/me/user/{username}/rib/{iban_id}
    //     * @param {number} ibanId - unique number to identify the iban
    //     * @param {string} UserNameValue - Admin Only - to delete one iban of a user from the company account
    //     * @returns {Promise.<IApiResponse>} Get response with status 204 if success.
    //     */
    //    delete = (
    //        ibanId: number,
    //        userNameValue?: string,
    //    ): Promise<IApiResponse> => {
    //        return this.axiosRequest
    //            .delete(
    //                this.buildIbanUrl(
    //                    this.buildUrl(true, Iban.url, userNameValue),
    //                    ibanId,
    //                ),
    //            )
    //            .then((res) => {
    //                return this.ApiResponse.formatResponse(
    //                    true,
    //                    'user deleted successfully',
    //                    res.status,
    //                );
    //            })
    //            .catch(this.ApiResponse.formatError);
    //    };
    //
    //    /**
    //     * VALIDATE (reserved to 'Paygreen' account users) | /account/me/user/{username}/rib/{iban_id}
    //     *  @param {number} ibanId - unique number to identify the iban
    //     *  @param {IbanValidationModel} ValidatedIban - Object containing all new iban information
    //     *  @param {string} userNameValue - UserName of the owner of the iban
    //     *  @returns {Promise.<IApiResponse>} Get object with iban validated
    //     */
    //    validate = (
    //        ValidatedIban: IbanValidationModel,
    //        ibanId: number,
    //        userNameValue: string,
    //    ): Promise<IApiResponse> => {
    //        const serializedValidatedIban = serialize(ValidatedIban);
    //        return this.axiosRequest
    //            .put(
    //                this.buildIbanUrl(
    //                    this.buildUrl(true, Iban.url, userNameValue),
    //                    ibanId,
    //                ),
    //                serializedValidatedIban,
    //            )
    //            .then((res) => {
    //                return this.ApiResponse.formatResponse(
    //                    true,
    //                    res.data,
    //                    res.status,
    //                );
    //            })
    //            .catch(this.ApiResponse.formatError);
    //    };
}
