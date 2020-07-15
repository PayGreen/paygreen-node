---
id: handle-transaction
title: Handle a transaction
---

Here you will have all informations to manage your transactions.

## getDetails()

| Param         | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| transactionId | `string` | (Required) The unique id of the transation |

- Return a Promise with an object containing the transaction details.

```Javascript
    return sdk.transaction
        .getDetails(transactionId)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a \data object with the transaction details.

```JSON
{
    success: true,
    status: 200,
    message: "OK",
    dataInfo: {
        code: 0,
        data: {
            id: "tr9558da6e3ed2332289a764f1a754b8c9",
            orderId: "oid5762",
            amount: 1450,
            currency: "EUR",
            type: "RECURRING",
            paymentType: "CB",
            url:
            "http://sandbox.paygreen.fr/payment/execute/tr9558da6e3ed2332289a764f1a754b8c9",
            result: {
                paymentErrorStatus: "",
                status: "PENDING",
                threeDSecureStatus: "3DS_SUCCESSED",
            },
            card: Object,
            buyer: Buyer,
            orderDetails: OrderDetails,
            metadata: Object,
            eligibleAmount: Object,
            idFingerprint: 0,
            createdAt: "2020-07-09T17:46:01+02:00",
            valueAt: "2020-07-09T17:46:01+02:00",
            answeredAt: 0,
            ttl: "PT10M",
        },
        message: "",
        success: true,
    },
}
```

## modify()

| Param         | Type     | Description                                  |
| ------------- | -------- | -------------------------------------------- |
| transactionId | `string` | (Required) The unique id of the transation   |
| newAmount     | `number` | (Required) The new amount of the transaction |

- Return a Promise with an object containing the modified transaction details.

```Javascript
    return sdk.transaction
        .modify(transactionId, 1000)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a \data object with the transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0
        data:
            amount: 1000,
            answeredAt: 0,
            buyer: Buyer,
            orderDetails: OrderDetails,
            card: Object,
            createdAt: "2020-07-09T17:55:11+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "trc8814d2556090b12ea0d8b50bba5afda",
            idFingerprint: 0,
            metadata: Object,
            orderId: "1594310111784",
            paymentType: "CB",
            result: {
                paymentErrorStatus: "",
                status: "PENDING",
                threeDSecureStatus: "3DS_SUCCESSED",
            },
            ttl: "PT10M",
            type: "RECURRING",
            url: "http://sandbox.paygreen.fr/payment/execute/trc8814d2556090b12ea0d8b50bba5afda",
            valueAt: "2020-07-09T17:55:11+02:00",
        },
        message: "",
        success: true,
}
```

## refund()

| Param         | Type     | Description                                                                                 |
| ------------- | -------- | ------------------------------------------------------------------------------------------- |
| transactionId | `string` | (Required) The unique id of the transation                                                  |
| amount        | `number` | (Optional) The amount refunded in EUR cents, if undefined the transaction is fully refunded |

- Return a Promise with an object containing the refunded transaction details.

```Javascript
    return sdk.transaction
        .refund(transactionId, 1000)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a \data object with the refunded transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data: {
            amount: 1000,
            answeredAt: "2020-07-09T17:59:24+02:00",
            buyer: Buyer,
            orderDetails: OrderDetails,
            card: Object,
            createdAt: "2020-07-09T17:55:11+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "trc8814d2556090b12ea0d8b50bba5afda",
            idFingerprint: 0,
            metadata: Object,
            orderId: "1594310111784",
            paymentType: "CB",
            result: {
                paymentErrorStatus: "",
                status: "REFUNDED",
                threeDSecureStatus: "3DS_SUCCESSED",
            },
            ttl: "0",
            type: "RECURRING",
            url: "http://sandbox.paygreen.fr/payment/execute/trc8814d2556090b12ea0d8b50bba5afda",
            valueAt: "2020-07-09T17:59:24+02:00",
        }
        message: "",
        success: true,
    },
}
```

## confirm()

| Param         | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| transactionId | `string` | (Required) The unique id of the transation |
| amount        | `number` | (Required) The amount of the transaction   |
| message       | `string` | (Required) The validation message          |

- Return a Promise with an object containing the confirmed transaction details.

```Javascript
    return sdk.transaction
        .confirm(transactionId, 1450, 'Transaction confirmed!')
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a \data object with the transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data: {
            amount: 1000,
            answeredAt: "2020-07-09T17:59:24+02:00",
            buyer: Buyer,
            orderDetails: OrderDetails,
            card: Object,
            createdAt: "2020-07-09T17:55:11+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "trc8814d2556090b12ea0d8b50bba5afda",
            idFingerprint: 0,
            metadata: Object,
            orderId: "1594310111784",
            paymentType: "CB",
            result: {
                paymentErrorStatus: "",
                status: "SUCCESSED",
                threeDSecureStatus: "3DS_SUCCESSED",
            },
            ttl: "0",
            type: "RECURRING",
            url: "http://sandbox.paygreen.fr/payment/execute/trc8814d2556090b12ea0d8b50bba5afda",
            valueAt: "2020-07-09T17:59:24+02:00",
        }
        message: "",
        success: true,
    },
}
```

## cancel()

| Param         | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| transactionId | `string` | (Required) The unique id of the transation |

- Return a Promise with an object containing the cancelled transaction details.

```Javascript
    return sdk.transaction
        .cancel(transactionId)
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a \data object with the transaction details.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: {
        code: 0,
        data: {
            amount: 1000,
            answeredAt: 0,
            buyer: Buyer,
            orderDetails: OrderDetails,
            card: Object,
            createdAt: "2020-07-09T18:11:18+02:00",
            currency: "EUR",
            eligibleAmount: Object,
            id: "trb8a36aadb0f911776aa9392720faca16",
            idFingerprint: 0,
            metadata: Object,
            orderId: "1594311077940",
            paymentType: "CB",
            result: {
                status: "CANCELLED", threeDSecureStatus: null, paymentErrorStatus: "",
            },
            ttl: "PT10M",
            type: "RECURRING",
            url: "http://sandbox.paygreen.fr/payment/execute/trb8a36aadb0f911776aa9392720faca16",
            valueAt: "2020-07-09T18:11:18+02:00",
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
    success: false,         // If API is successful
    status: 404,            // status code of the response
    message: 'Not Found',   // statusText of the response
    dataInfo: null,         // body of the response
}
```
