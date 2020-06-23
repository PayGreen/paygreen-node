import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { MinLength } from 'class-validator';
import { Buyer as BuyerModel } from './Buyer';
import { Card as CardModel } from './Card';

/**
 * Transaction Model Class with methods to create and manage transaction data
 * @property {string?} orderId - unique id of transaction
 * @property {number?} amount - amount in EUR cents
 * @property {string?} currency - currency
 * @property {string?} paymentType - payment type
 * @property {string?} returned_url - Address to which the client should be redirected after the action has been performed
 * @property {string?} notified_url - Address to which PayGreen can make calls to update the status
 * @property {number?} idFingerprint - unique id to use Tree algorithm
 * @property {BuyerModel?} buyer - bank of the iban
 * @property {Array<string>?} metadata - bank of the iban
 * @property {Array<string>?} eligibleAmount - bank of the iban
 * @property {CardModel?} card - bank of the iban
 * @property {string?} ttl - bank of the iban
 */
@Serializable()
export class Transaction {
    @JsonProperty('orderId')
    @MinLength(1)
    public orderId?: string | null;

    @JsonProperty('amount')
    @MinLength(1)
    public amount?: number | null;

    @JsonProperty('currency')
    @MinLength(1)
    public currency?: string | null;

    @JsonProperty('paymentType')
    public paymentType?: string | null;

    @JsonProperty('returned_url')
    public returned_url?: string | null;

    @JsonProperty('notified_url')
    public notified_url?: string | null;

    @JsonProperty('idFingerprint')
    public idFingerprint?: number | null;

    @JsonProperty('buyer')
    public buyer?: BuyerModel | null;

    @JsonProperty('metadata')
    public metadata?: Array<string> | null;

    @JsonProperty('eligibleAmount')
    public eligibleAmount?: Array<string> | null;

    @JsonProperty('card')
    public card?: CardModel | null;

    @JsonProperty('ttl')
    public ttl?: string | null;

    constructor(
        orderId?: string | null,
        amount?: number | null,
        currency?: string | null,
        paymentType?: string | null,
        returned_url?: string | null,
        notified_url?: string | null,
        idFingerprint?: number | null,
        buyer?: BuyerModel | null,
        metadata?: Array<string> | null,
        eligibleAmount?: Array<string> | null,
        card?: CardModel | null,
        ttl?: string | null,
    ) {
        this.orderId = orderId;
        this.amount = amount;
        this.currency = currency;
        this.paymentType = paymentType;
        this.returned_url = returned_url;
        this.notified_url = notified_url;
        this.idFingerprint = idFingerprint;
        this.buyer = buyer;
        this.metadata = metadata;
        this.eligibleAmount = eligibleAmount;
        this.card = card;
        this.ttl = ttl;
    }
}
