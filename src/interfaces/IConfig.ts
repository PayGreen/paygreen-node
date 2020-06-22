import { Mode } from '../enums/Mode';
export interface IConfig {
    shopId?: string | null;
    privateKey?: string | null;
    mode?: Mode | null;
    host?: string | null;
}
