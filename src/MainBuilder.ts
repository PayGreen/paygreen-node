import { IIdentity } from './interfaces';
import axios from 'axios';
import { ApiResponse } from './models';

/**
 * Main Builder with config constructor
 * @property {IIdentity} identity - identity inherited from SDK class to authorize access to API and build url
 * @property {IKey} key - private key inherited from SDK class
 * @property {string} host - host of Api inherited from SDK class based on mode of production
 * @property {ApiResponse} ApiResponse - class to normalize all Api Responses for better readibility
 * @property {object} axiosConfig - all parameters for axios instance
 * @property {any} axiosRequest -  create a new instance of axios with a custom config
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
     * Build a complete path object
     * @param {IKey} key - private key inherited from SDK class
     * @param {IIdentity} identity - identity inherited from SDK class
     * @param {string} host - host of Api inherited from SDK
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
     * BUILD URL FOR MAIN API ROUTES |
     * @param {string} url - basic url value for each route
     * @returns {string} - new built complete url
     */
    buildUrl = (url: string): string => {
        return '/api/' + this.identity.shopId + url;
    };
}
