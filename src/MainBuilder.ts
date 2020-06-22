import { IIdentity } from './interfaces/IIdentity';
import { IKey } from './interfaces/IKey';
import axios from 'axios';

/**
 * Main Builder with config constructor
 * @property {IIdentity} identity - identity inherited from SDK class to authorize access to API and build url
 * @property {IKey} key - private key inherited from SDK class
 * @property {string} host - host of Api inherited from SDK class based on mode of production
 * @property {any} ApiResponse - class to normalize all Api Responses for better readibility
 * @property {object} axiosConfig - all parameters for axios instance
 * @property {any} axiosRequest -  create a new instance of axios with a custom config
 */
export class MainBuilder {
    public identity: IIdentity;
    public key: IKey;
    public host: string;
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
    constructor(key: IKey, identity: IIdentity, host: string) {
        this.key = key;
        this.identity = identity;
        this.host = host;
        this.axiosConfig.baseURL = host;
        this.axiosConfig.headers.Authorization = `Bearer ${key.privateKey}`;
        this.axiosRequest = axios.create(this.axiosConfig);
    }
}
