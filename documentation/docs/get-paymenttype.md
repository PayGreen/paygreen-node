---
id: get-paymenttype
title: Know the payment types availables
---

Here you will have all informations to know how to retrieve payment types availables.

## getPaymentType()

- Return a Promise with an object containing all the payment types availables.

```Javascript
    return sdk.paymentType
        .getPaymentType()
        .then((res) => {
            console.log(res)
        });
```

- API Response
    The \dataInfo object inside API response contains a \data object with all the payment types availables.

```JSON
{
    success: true,
    status: 200,
    message: 'OK',
    dataInfo: any,
}
```
