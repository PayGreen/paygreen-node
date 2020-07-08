---
id: handle-transaction
title: Handle a transaction
---

Here you will have all informations to manage your transactions.

## Get details of a transaction

| Param         | Type   | Description                     |
| ------------- | ------ | ------------------------------- |
| transactionId | string | The unique id of the transation |

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

## Modify a transaction

| Param         | Type   | Description                       |
| ------------- | ------ | --------------------------------- |
| transactionId | string | The unique id of the transation   |
| newAmount     | number | The new amount of the transaction |

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

## Refund a transaction

| Param         | Type    | Description                                                                                  |
| ------------- | ------- | -------------------------------------------------------------------------------------------- |
| transactionId | string  | The unique id of the transation                                                              |
| amount        | number? | (Optionnal) The amount refunded in EUR cents, if undefined the transaction is fully refunded |

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

## Confirm a transaction

| Param         | Type   | Description                     |
| ------------- | ------ | ------------------------------- |
| transactionId | string | The unique id of the transation |
| amount        | number | The amount of the transaction   |
| message       | string | The validation message          |

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

## Cancel a transaction

| Param         | Type   | Description                     |
| ------------- | ------ | ------------------------------- |
| transactionId | string | The unique id of the transation |

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
