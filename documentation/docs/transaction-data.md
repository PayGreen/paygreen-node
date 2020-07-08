---
id: transaction-data
title: Transaction
---

Here you will find all informations to create a New Transaction Object with our Transaction Model class.

- [`buyer`](buyer-data.md) and [`orderDetails`](orderdetails-data.md) are based on specific Model class, please visit corresponding link to know how to deal with them.

## Object expected by API PayGreen

| Name           | Type           | Description                                                                                                                 |
| -------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| orderId        | `string`       | (Required) The unique id of transaction                                                                                     |
| amount         | `number`       | (Required) The amount in EUR cents                                                                                          |
| currency       | `string`       | (Required) The currency used, 'EUR' by default                                                                              |
| paymentType    | `string`       | (Optional) The payment type, 'CB' by default                                                                                           |
| returnedUrl    | `string`       | (Optional) An address to which the client should be redirected after the action has been performed                          |
| notifiedUrl    | `string`       | (Required) The address to which PayGreen can make calls to update the status                                                           |
| idFingerprint  | `number`       | (Optional) The unique id to use Tree algorithm                                                                              |
| buyer          | `Buyer`        | (Required) An object that represent the buyer                                                                               |
| orderDetails   | `OrderDetails` | (for SUBSCRIPTION and XTIME only) An object that describe how debits will be performed if subscription or multiple payments |
| metadata       | `object`       | /                                                                                                                           |
| eligibleAmount | `object`       | (Optional) An object with maximum amount for each payment type available                                                    |
| card           | `object`       | (Optional) A card id if you want to use a card fingerprint                                                                  |
| ttl            | `string`       | (Optional) The time to live before transaction expire                                                                       |

```JSON
{
    orderId: string,
    amount: number,
    currency: string,
    paymentType: string,
    returnedUrl: enum,
    notifiedUrl: string,
    idFingerprint: number,
    buyer: Buyer,
    orderDetails: OrderDetails,
    metadata: object,
    eligibleAmount: object,
    card: object,
    ttl: string,
}

```

## Add one information at a time

```Javascript
import { Transaction } from 'paygreen-node';

const newTransaction = new Transaction();
    newTransaction.amount = 1450;

```

## Or all at once

```Javascript
import { Buyer, OrderDetails, Transaction } from 'paygreen-node';

const newTransaction = new Transaction(
    new Date().getTime(),
    1450,
    'EUR',
    'CB',
    'http://example.com/retour-client',
    'http://example.com/retour-server',
    0,
    new Buyer(),
    new OrderDetails(),
    { 'token': 'abcdef1234567890' },
    {
        'orderId': new Date().getTime(),
        'display':'0'
    },
    {
        'ANCV': '1000',
        'RESTOFLASH': '0'
    },
    'PT30M',
);

```

## We have built special method to verify the data before sending it to API. [Try it here](tools#verify)
