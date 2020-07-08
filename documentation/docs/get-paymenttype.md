---
id: get-paymenttype
title: Know the payment types availables
---

Here you will have all informations to know which payment types are availables.

## Get payment types availables

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
