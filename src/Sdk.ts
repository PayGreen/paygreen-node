import { IConfig, IIdentity } from './interfaces';
import { Host, Mode } from './enums';
import { Transaction } from './resources';

/**
 * The Sdk Main Class to make APIPayGreen Calls.
 * @property {Transaction} transaction - A class to use transactions related requests
 */
export class Sdk {
    public transaction: Transaction;

    private _identity: IIdentity = {
        shopId: '',
        privateKey: '',
    };

    private _mode: Mode;

    private _host: string;

    /**
     * CREATE THE USER CONFIGURATION |
     * @param {IConfig?} configObject - An object that contains the configuration for the Sdk
     */
    constructor(configObject?: IConfig) {
        if (configObject?.shopId) {
            this._identity.shopId = configObject.shopId;
        }

        if (configObject?.privateKey) {
            this._identity.privateKey = configObject.privateKey;
        }

        if (configObject?.mode == Mode.DEV && configObject?.host != null) {
            this._host = configObject.host;
            this._mode = configObject.mode;
        } else if (configObject?.mode != null && configObject?.host == null) {
            this._mode = configObject.mode;
            this._host = Host[Mode[configObject.mode]];
        } else {
            this._mode = Mode.PROD;
            this._host = Host[Mode[Mode.PROD]];
        }
        this.transaction = new Transaction(this._identity, this._host);
    }

    // GETTERS AND SETTERS FOR PRIVATE PROPERTIES
    get shopId(): string | null {
        return this._identity.shopId;
    }

    set shopId(shopId: string | null) {
        this._identity.shopId = shopId;
    }

    get privateKey(): string | null {
        return this._identity.privateKey;
    }

    set privateKey(privateKey: string | null) {
        this._identity.privateKey = privateKey;
    }

    get mode(): Mode {
        return this._mode;
    }

    set mode(mode: Mode) {
        this._mode = mode;
    }

    get host(): string {
        return this._host;
    }

    set host(host: string) {
        this._host = host;
    }
}
