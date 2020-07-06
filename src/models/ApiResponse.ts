import { IApiResponse } from '../interfaces';

/** Api Response Model Class with all methods to format/select api responses */
export class ApiResponse {
    /**
     *  GLOBAL RESPONSE FORMAT METHOD |
     *  @description - Normalize all Api Responses for better readibility
     *  @param {boolean} success - Tells if the Api responds successfully
     *  @param {number} status - The status of the Api response
     *  @param {string} message - The statusText of the Api response
     *  @param {any} data - The data contained in the response
     *  @returns {IApiResponse} - A global object with complete response formatted
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
     *  @description - Format error response from Api
     *  @param {any} error- The error received from Api
     *  @returns {IApiResponse} - A global object with complete response formatted
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
     *  @description - Verify if http response status corresponds to 2xx
     *  @param {IApiResponse} response - A response from Api formatted by formatResponse()
     *  @returns {boolean}
     */
    static isSuccessful = (response: IApiResponse): boolean => {
        return ApiResponse.getStatus(response).toString().charAt(0) === '2';
    };

    /**
     * IS INVALID
     *  @description - Verify if http response status corresponds to 4xx
     *  @param {IApiResponse} response - A response from Api formatted by formatResponse()
     *  @returns {boolean}
     */
    static isInvalid = (response: IApiResponse): boolean => {
        return ApiResponse.getStatus(response).toString().charAt(0) === '4';
    };

    /**
     * CAUSED AN ERROR
     *  @description - Verify if http response status corresponds to 5xx
     *  @param {IApiResponse} response - A response from Api formatted by formatResponse()
     *  @returns {boolean}
     */
    static causedAnError = (response: IApiResponse): boolean => {
        return ApiResponse.getStatus(response).toString().charAt(0) === '5';
    };

    /**
     * GET ERROR MESSAGE |
     *  @param {IApiResponse} response - A response from Api formatted by formatResponse()
     *  @returns {string} - The details of the error
     */
    static getErrorMessage = (response: IApiResponse): string => {
        return response.success
            ? 'no error'
            : response.dataInfo.message
            ? response.dataInfo.message
            : response.message;
    };

    /**
     * GET STATUS |
     *  @param {IApiResponse} response - A response from Api formatted by formatResponse()
     *  @returns {number} - Get status of the http response
     */
    static getStatus = (response: IApiResponse): number => {
        return response.status;
    };
}
