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
    message: 'OK',
    dataInfo: any,
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
    dataInfo: any,
}
```

## refund()

| Param         | Type     | Description                                                                                  |
| ------------- | -------- | -------------------------------------------------------------------------------------------- |
| transactionId | `string` | (Required) The unique id of the transation                                                   |
| amount        | `number` | (Optionnal) The amount refunded in EUR cents, if undefined the transaction is fully refunded |

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
    dataInfo: any,
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
    dataInfo: any,
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
    dataInfo: any,
}
```
