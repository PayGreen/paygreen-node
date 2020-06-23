import { Mode } from '../enums';
export interface IConfig {
    shopId?: string | null;
    privateKey?: string | null;
    mode?: Mode | null;
    host?: string | null;
}
