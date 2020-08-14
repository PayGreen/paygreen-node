---
id: create-transaction
title: Create a transaction
---

If you have finished setting up the Sdk with your ids, you can now create transactions and manage them!

All types of Transaction are created the same way:

- First, you need to create a Transaction object with all required informations concerning the transaction (id, amount, currency, payment type, etc.). For that, please visit the following [link](transaction-data.md).

- Then you can pass this object to the following method and the type of the transaction. Please, use the Enum TransactionType to avoid typo in TransactionType name.

## create()

| Param          | Type              | Description                                                                 |
| -------------- | ----------------- | --------------------------------------------------------------------------- |
| newTransaction | `Transaction`     | (Required) A Transaction object containing all new transaction informations |
| type           | `TransactionType` | (Required) The type of the transaction                                      |

- To create a new Transaction object, we highly recommend you to use our Transaction Model Class to ensure full compatibility with the API. [Try it here](transaction-data.md)

- Transactions of type subscription and xtime requires an orderDetails field inside the Transaction object to work.

- Return an object with new transaction details.

```Javascript
    return sdk.transaction
        .create(newTransaction, TransactionType.(cash|subscription|xtime|tokenize))
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

## In case of errors

When an error append during requests, the response can takes several form depending on where the error happened:

- If the error occur during request processing, the dataInfo object will be empty or contains a HTML error page.
- If the error occur during server-side processing, the DataInfo object will contain the error code in the `code` field, the error message in the `message` field, the `success` field will be equal to false and the `data` object will be null.

```JSON
{
    success: true,                              // If API is successful
    status: 200,                                // status code of the response
    message: 'OK',                              // statusText of the response
    dataInfo: {                                 // body of the response
        code: 1,                                // Return code of the API
        data: null,                             // Object returned by the API
        message: "Field orderId is required",   // Error message of the server
        success: false,                         // If server-side errors happened
    },
}
```
