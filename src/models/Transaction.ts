import { Serializable, JsonProperty } from 'typescript-json-serializer';
import {
    IsInt,
    IsNotEmpty,
    IsUrl,
    Matches,
    ValidateNested,
    IsOptional,
} from 'class-validator';
import { Buyer } from './Buyer';
import { OrderDetails } from './OrderDetails';
import { ttlRegExp } from '../regExp/RegExp';

/**
 * Transaction Model Class with methods to create and manage transaction data
 * @property {string?} orderId - (required) unique id of transaction
 * @property {number?} amount - (required) amount in EUR cents
 * @property {string?} currency - (required) currency
 * @property {string?} paymentType - payment type
 * @property {string?} returnedUrl - (optional) address to which the client should be redirected after the action has been performed
 * @property {string?} notifiedUrl - address to which PayGreen can make calls to update the status
 * @property {number?} idFingerprint - (optional) unique id to use Tree algorithm
 * @property {BuyerModel?} buyer - (for CASH and TOKENIZE)
 * @property {OrderDetailsModel?} orderDetails - (for SUBSCRIPTION and XTIME)
 * @property {object?} metadata -
 * @property {object?} eligibleAmount - (optional)
 * @property {object?} card - (optional)
 * @property {string?} ttl - time to live before transaction expire
 */
@Serializable()
export class Transaction {
    @JsonProperty('orderId')
    @IsNotEmpty()
    public orderId?: string | null;

    @JsonProperty('amount')
    @IsNotEmpty()
    @IsInt()
    public amount?: number | null;

    @JsonProperty('currency')
    @IsNotEmpty()
    public currency?: string | null;

    @JsonProperty('paymentType')
    public paymentType?: string | null;

    @JsonProperty('returned_url')
    @IsOptional()
    @IsUrl()
    public returnedUrl?: string | null;

    @JsonProperty('notified_url')
    @IsUrl()
    public notifiedUrl?: string | null;

    @JsonProperty('idFingerprint')
    @IsOptional()
    public idFingerprint?: number | null;

    @JsonProperty('buyer')
    @ValidateNested()
    public buyer?: Buyer | null;

    @JsonProperty('orderDetails')
    @ValidateNested()
    public orderDetails?: OrderDetails | null;

    @JsonProperty('metadata')
    public metadata?: object | null;

    @JsonProperty('eligibleAmount')
    @IsOptional()
    public eligibleAmount?: object | null;

    @JsonProperty('card')
    @IsOptional()
    public card?: object | null;

    @JsonProperty('ttl')
    @Matches(ttlRegExp)
    public ttl?: string | null;

    constructor(
        orderId?: string | null,
        amount?: number | null,
        currency?: string | null,
        paymentType?: string | null,
        returnedUrl?: string | null,
        notifiedUrl?: string | null,
        idFingerprint?: number | null,
        buyer?: Buyer | null,
        orderDetails?: OrderDetails | null,
        metadata?: object | null,
        eligibleAmount?: object | null,
        card?: object | null,
        ttl?: string | null,
    ) {
        this.orderId = orderId;
        this.amount = amount;
        this.currency = currency;
        this.paymentType = paymentType;
        this.returnedUrl = returnedUrl;
        this.notifiedUrl = notifiedUrl;
        this.idFingerprint = idFingerprint;
        this.buyer = buyer;
        this.orderDetails = orderDetails;
        this.metadata = metadata;
        this.eligibleAmount = eligibleAmount;
        this.card = card;
        this.ttl = ttl;
    }
}
