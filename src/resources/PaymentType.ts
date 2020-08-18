import { MainBuilder } from '../MainBuilder';
import { IApiResponse } from '../interfaces';

/**
 * PaymenType Class with method to get all payment types available
 * @property {string} url - The main url to build Api requests for this class
 */
export class PaymentType extends MainBuilder {
    static url: string = '/paymenttype';

    /**
     * GET PAYMENT TYPES | GET /api/{identifiant}/paymenttype
     * @param {string?} paymentType - The payment type you want to use
     * @param {string?} currency - The currency you want to use
     * @returns {Promise.<IApiResponse>} - An object that contains all payment type corresponding to search
     */
    getPaymentType = (
        paymentType?: string,
        currency?: string,
    ): Promise<IApiResponse> => {
        let data = {};
        if (paymentType) {
            data['paymentType'] = paymentType;
        }
        if (currency) {
            data['currency'] = currency;
        }
        return this.axiosRequest
            .get(this.buildUrl(PaymentType.url), {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    ...data,
                },
                data: null,
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
