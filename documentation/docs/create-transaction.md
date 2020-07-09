---
id: create-transaction
title: Create a transaction
---

If you have finished setting up the Sdk with your ids, you can now create transactions and manage them!

All types of Transaction are created the same way:

- First, you need to create a Transaction object with all required informations concerning the transaction (id, amount, currency, payment type, etc.). For that, please visit the following [link](transaction-data.md).

- Then you can pass this object to one of the following methods. Each one of them create a specific type of transaction: CASH, SUBSCRIPTION, XTIME and TOKENIZE. Some kind of transaction need specific informations inside the Transaction object, for example: SUBSCRIPTION and XTIME need an orderDetails field inside the Transaction object to work.

## createCash()

| Param          | Type          | Description                                                                 |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| newTransaction | `Transaction` | (Required) A Transaction object containing all new transaction informations |

- To create a new Transaction object, we highly recommend you to use our Transaction Model Class to ensure full compatibility with the API. [Try it here](transaction-data.md)

- Return an object with new transaction details.

```Javascript
    return sdk.transaction
        .createCash(newTransaction)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a data object with new transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data: {
            amount: 1450,
            answeredAt: 0,
            buyer: Buyer,
            card: Object,
            createdAt: "2020-07-09T16:59:25+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "tr77acf9fbecc4ee84e6ceb824c728a5c8",
            idFingerprint: 0,
            metadata: Object,
            orderId: "1594306765548",
            paymentType: "CB",
            result: Object,
            ttl: "PT10M",
            type: "CASH",
            url: "http://sandbox.paygreen.fr/payment/execute/tr77acf9fbecc4ee84e6ceb824c728a5c8",
            valueAt: "2020-07-09T16:59:25+02:00",
        },
        message: "",
        success: true,
    },
}
```

## createSubscription()

| Param          | Type          | Description                                                                 |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| newTransaction | `Transaction` | (Required) A Transaction object containing all new transaction informations |

- To create a new Transaction object, we highly recommend you to use our Transaction Model Class to ensure full compatibility with the API. [Try it here](transaction-data.md)

- This type of transaction requires an orderDetails field inside the Transaction object to work.

- Return an object with new transaction details.

```Javascript
    return sdk.transaction
        .createSubscription(newTransaction)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a data object with new transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data: {
            amount: 1450,
            answeredAt: "2020-07-09T17:04:46+02:00",
            buyer: Buyer,
            card: Object,
            createdAt: "2020-07-09T17:04:46+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "pree347fddce29e976bf032396292383b9",
            idFingerprint: 0,
            metadata: Object,
            orderDetails: OrderDetails,
            orderId: "1594307086295",
            originalAmount: 0,
            paymentType: "CB",
            result: Object,
            ttl: "PT10M",
            type: "RECURRING",
            url: "http://sandbox.paygreen.fr/payment/execute/pree347fddce29e976bf032396292383b9",
            valueAt: "2020-07-09T17:04:46+02:00",
        },
        message: "",
        success: true,
    },
}
```

## createXTime()

| Param          | Type          | Description                                                                 |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| newTransaction | `Transaction` | (Required) A Transaction object containing all new transaction informations |

- To create a new Transaction object, we highly recommend you to use our Transaction Model Class to ensure full compatibility with the API. [Try it here](transaction-data.md)

- This type of transaction requires an orderDetails field inside the Transaction object to work.

- Return an object with new transaction details.

```Javascript
    return sdk.transaction
        .createXTime(newTransaction)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a data object with new transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data:
            amount: 1450,
            answeredAt: "2020-07-09T17:07:37+02:00",
            buyer: Buyer,
            card: Object,
            createdAt: "2020-07-09T17:07:37+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "pr9e2eed8404d261b4ccb001fc6f40cb9a",
            idFingerprint: 0,
            metadata: Object,
            orderDetails: OrderDetails,
            orderId: "1594307257507",
            originalAmount: 0,
            paymentType: "CB",
            result: Object,
            ttl: "PT10M",
            type: "XTIME",
            url: "http://sandbox.paygreen.fr/payment/execute/pr9e2eed8404d261b4ccb001fc6f40cb9a",
            valueAt: "2020-07-09T17:07:37+02:00",
        },
        message: "",
        success: true,
    },
}
```

## createTokenize()

| Param          | Type          | Description                                                                 |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| newTransaction | `Transaction` | (Required) A Transaction object containing all new transaction informations |

- To create a new Transaction object, we highly recommend you to use our Transaction Model Class to ensure full compatibility with the API. [Try it here](transaction-data.md)

- Return an object with new transaction details.

```Javascript
    return sdk.transaction
        .createTokenize(newTransaction)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a data object with new transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data: {
            amount: 1450,
            answeredAt: 0,
            buyer: Buyer,
            card: Object,
            createdAt: "2020-07-09T17:11:33+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "tr294b816cd49df4ec699d4c96b798a16f",
            idFingerprint: 0,
            metadata: Object,
            orderId: "1594307493739",
            paymentType: "CB",
            result: Object,
            ttl: "PT10M",
            type: "TOKENIZE",
            url: "http://sandbox.paygreen.fr/payment/execute/tr294b816cd49df4ec699d4c96b798a16f",
            valueAt: "2020-07-09T17:11:33+02:00",
        },
        message: "",
        success: true,
    },
}
```
