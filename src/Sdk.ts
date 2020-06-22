import { IIdentity } from './interfaces/IIdentity';
import { IKey } from './interfaces/IKey';
import { IConfig } from './interfaces/IConfig';
import { Mode } from './enums/Mode';
import { Host } from './enums/Host';

/** The Sdk Main Class to make APIPayGreen Calls. */
export class Sdk {
    private _identity: IIdentity = {
        shopId: '',
    };

    private _key: IKey = {
        privateKey: '',
    };

    private _mode: Mode;

    private _host: string;

    /**
     * Create the user configuration.
     * @param {IConfig?} configObject -
     */
    constructor(configObject?: IConfig) {
        if (configObject?.shopId) {
            this._identity.shopId = configObject.shopId;
        }

        if (configObject?.privateKey) {
            this._key.privateKey = configObject.privateKey;
        }

        if (
            (configObject?.mode == Mode.DEV ||
                configObject?.mode == Mode.PREPROD) &&
            configObject?.host != null
        ) {
            this._host = configObject.host;
            this._mode = configObject.mode;
        } else if (configObject?.mode != null && configObject?.host == null) {
            this._mode = configObject.mode;
            this._host = Host[Mode[configObject.mode]];
        } else {
            this._mode = Mode.PROD;
            this._host = Host[Mode[Mode.PROD]];
        }
    }

    get shopId(): string | null {
        return this._identity.shopId;
    }

    set shopId(shopId: string | null) {
        this._identity.shopId = shopId;
    }

    get privateKey(): string | null {
        return this._key.privateKey;
    }

    set privateKey(privateKey: string | null) {
        this._key.privateKey = privateKey;
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
