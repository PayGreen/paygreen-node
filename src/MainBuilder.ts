import { IIdentity } from './interfaces';
import axios from 'axios';
import { ApiResponse } from './models';

/**
 * Main Builder with config constructor
 * @property {IIdentity} identity - The identity inherited from SDK class to authorize access to API and build url
 * @property {string} host - The host of Api inherited from SDK class based on mode of production
 * @property {ApiResponse} ApiResponse - A class used to normalize all Api Responses for better readibility
 * @property {object} axiosConfig - All parameters for axios instance
 * @property {any} axiosRequest - An instance of axios with a custom config
 */
export class MainBuilder {
    public identity: IIdentity;
    public host: string;
    public ApiResponse: any = ApiResponse;
    public axiosConfig = {
        baseURL: '',
        timeout: 3000,
        headers: { Authorization: '' },
    };
    public axiosRequest: any;

    /**
     * CREATE A COMPLETE PATH OBJECT |
     * @param {IIdentity} identity - The identity inherited from SDK class
     * @param {string} host - The host of Api inherited from SDK
     */
    constructor(identity: IIdentity, host: string) {
        this.identity = identity;
        this.host = host;
        this.ApiResponse;
        this.axiosConfig.baseURL = host;
        this.axiosConfig.headers.Authorization = `Bearer ${identity.privateKey}`;
        this.axiosRequest = axios.create(this.axiosConfig);
    }

    /**
     * BUILD URL FOR MAIN ROUTES API |
     * @description - Build URL for main routes of the Api
     * @param {string} url - The basic url value for each route
     * @returns {string} - The new built complete url
     */
    buildUrl = (url: string): string => {
        return '/api/' + this.identity.shopId + url;
    };
}
