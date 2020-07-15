---
id: orderdetails-data
title: Order details
---

Here you will find all informations to create a New OrderDetails Object with our OrderDetails Model class.

## Object expected by API PayGreen

| Name        | Type     | Description                                     |
| ----------- | -------- | ----------------------------------------------- |
| cycle       | `number` | (Required) The unique ID of the buyer           |
| count       | `number` | (Required) The lastname of the buyer            |
| day         | `number` | (Required) The firstname of the buyer           |
| startAt     | `string` | (Required) The email of the buyer               |
| firstAmount | `number` | (Required) The country where the buyer lives    |

## Add one information at a time

```Javascript
import { OrderDetails } from 'paygreen-node';

const newOrderDetails = new OrderDetails();
    newOrderDetails.firstAmount = 1000;

```

## Or all at once

```Javascript
import { OrderDetails } from 'paygreen-node';

const newOrderDetails = new OrderDetails(
    40,
    3,
    0,
    new Date().toISOString(),
    1000,
);

```

## We have built special method to verify the data before sending it to API. [Try it here](tools#verify)
