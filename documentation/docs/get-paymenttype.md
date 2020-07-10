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
    dataInfo: {
        success: true,
        message: '',
        code: 0,
        data:[
            {
                currency: 'EUR',
                paymentType: 'CB',
                status: '2',
                availablePaymentMode: [ 'CASH', 'XTIME', 'RECURRING', 'TOKENIZE' ],
                iframe: { CASH: [Object], RECURRING: [Object], XTIME: [Object] },
                isLimited: 0,
                soldAvailable: 7620,
            },
            {
                currency: 'EUR',
                paymentType: 'TRD',
                status: '2',
                availablePaymentMode: [ 'CASH' ],
                iframe: { CASH: [Object] },
                isLimited: 0,
                soldAvailable: 0,
            }
        ],
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
