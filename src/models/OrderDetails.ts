import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { IsInt, IsISO8601 } from 'class-validator';

/**
 * OrderDetails Model Class with methods to create and manage order details
 * @property {number?} cycle -
 * @property {number?} count -
 * @property {number?} day -
 * @property {string?} startAt - start date of subscription or xtime payment
 * @property {number?} firstAmount - first amount of payment
 */
@Serializable()
export class OrderDetails {
    @JsonProperty('cycle')
    @IsInt()
    public cycle?: number | null;

    @JsonProperty('count')
    @IsInt()
    public count?: number | null;

    @JsonProperty('day')
    @IsInt()
    public day?: number | null;

    @JsonProperty('startAt')
    @IsISO8601()
    public startAt?: string | null;

    @JsonProperty('firstAmount')
    @IsInt()
    public firstAmount?: number | null;

    constructor(
        cycle?: number | null,
        count?: number | null,
        day?: number | null,
        startAt?: string | null,
        firstAmount?: number | null,
    ) {
        this.cycle = cycle;
        this.count = count;
        this.day = day;
        this.startAt = startAt;
        this.firstAmount = firstAmount;
    }
}
