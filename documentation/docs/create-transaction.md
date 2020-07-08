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
    dataInfo: any,
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
    dataInfo: any,
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
    dataInfo: any,
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
    dataInfo: any,
}
```
