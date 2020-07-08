---
id: transaction-data
title: Transaction
---

Here you will find all informations to create a New Transaction Object with our Transaction Model class.

- [`buyer`](buyer-data.md) and [`orderDetails`](orderdetails-data.md) are based on specific Model class, please visit corresponding link to know how to deal with them.

## Object expected by API PayGreen

| Name           | Type           | Description                                                                                                                 |
| -------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| orderId        | `string`       | (required) The unique id of transaction                                                                                     |
| amount         | `number`       | (required) The amount in EUR cents                                                                                          |
| currency       | `string`       | (required) The currency used, 'EUR' by default                                                                              |
| paymentType    | `string`       | The payment type, 'CB' by default                                                                                           |
| returnedUrl    | `string`       | (optional) An address to which the client should be redirected after the action has been performed                          |
| notifiedUrl    | `string`       | The address to which PayGreen can make calls to update the status                                                           |
| idFingerprint  | `number`       | (optional) The unique id to use Tree algorithm                                                                              |
| buyer          | `Buyer`        | (required) An object that represent the buyer                                                                               |
| orderDetails   | `OrderDetails` | (for SUBSCRIPTION and XTIME only) An object that describe how debits will be performed if subscription or multiple payments |
| metadata       | `object`       | /                                                                                                                           |
| eligibleAmount | `object`       | (optional) An object with maximum amount for each payment type available                                                    |
| card           | `object`       | (optional) A card id if you want to use a card fingerprint                                                                  |
| ttl            | `string`       | (optional) The time to live before transaction expire                                                                       |

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
    'orderId': {{$timestamp}},
    'amount': 1450,
    'currency': 'EUR',
    'paymentType': 'CB',
    'returned_url': 'http://example.com/retour-client',
    'notified_url': 'http://example.com/retour-server',
    'idFingerprint': 0,
    'buyer': new Buyer(),
    'orderDetails': new OrderDetails(),
    'card': {
        'token': 'abcdef1234567890',
    },
    'metadata':{
        'orderId':{{$timestamp}},
        'display':'0'
    },
    'eligibleAmount': {
        'ANCV': '1000',
        'RESTOFLASH': '0'
    },
    'ttl':'PT30M',
);

```

## We have built special method to verify the data before sending it to API. [Try it here](tools#verify)
