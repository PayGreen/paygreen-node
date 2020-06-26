import { IApiResponse } from '../interfaces';

/** Api Response Model Class with all methods to format/select api responses */
export class ApiResponse {
    /**
     *  GLOBAL RESPONSE FORMAT METHOD |
     *  @description - normalize all Api Responses for better readibility
     *  @param {boolean} success -
     *  @param {number} status -
     *  @param {string} message -
     *  @param {any} config -
     *  @param {any} request -
     *  @param {any} data -
     *  @returns {IApiResponse} - global object with complete response formatted
     */
    static formatResponse = (
        success: boolean,
        status: number,
        message: string,
        dataInfo: any,
    ): IApiResponse => {
        return {
            success: success,
            status: status,
            message: message,
            dataInfo: dataInfo,
        };
    };

    /**
     * ERROR RESPONSE MODEL |
     *  @description - format specific error response from Api
     *  @param {any} error- error received from Api
     *  @returns {IApiResponse} - global object with complete response formatted
     */
    static formatError = (error: any): IApiResponse => {
        return ApiResponse.formatResponse(
            false,
            error.response.status,
            error.response.statusText,
            error.response.data,
        );
    };

    /**
     * IS SUCCESSFUL
     *  @description - verify if http response format = 2xx
     *  @param {any} response - response formatted from Api
     *  @returns {boolean}
     */
    static isSuccessful = (response: any): boolean => {
        return ApiResponse.getStatus(response).toString().charAt(0) === '2';
    };

    /**
     * IS INVALID
     *  @description verify if http response format = 4xx
     *  @param {any} response - response formatted from Api
     *  @returns {boolean}
     */
    static isInvalid = (response: any): boolean => {
        return ApiResponse.getStatus(response).toString().charAt(0) === '4';
    };

    /**
     * CAUSED AN ERROR
     *  @description - verify if http response format = 5xx
     *  @param {any} response - response formatted from Api
     *  @returns {boolean}
     */
    static causedAnError = (response: any): boolean => {
        return ApiResponse.getStatus(response).toString().charAt(0) === '5';
    };

    /**
     * GET ERROR MESSAGE |
     *  @param {any} response - response formatted from Api
     *  @returns {string} - error message details
     */
    static getErrorMessage = (response: any): string => {
        return response.success ? 'none' : response.dataInfo.message;
    };

    /**
     * GET STATUS |
     *  @param {any} data - response formatted from Api
     *  @returns {number} Get status of the http response
     */
    static getStatus = (response: any): number => {
        return response.status;
    };
}
