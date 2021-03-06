---
id: buyer-data
title: Buyer
---

Here you will find all informations to create a New Buyer Object with our Buyer Model class.

- `country` is based on enumeration for autocompletion and all countries are available in format ISO31661Alpha2.

## Object expected by API PayGreen

| Name        | Type     | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| id          | `string` | (Required) The unique ID of the buyer            |
| lastName    | `string` | (Required) The lastname of the buyer             |
| firstName   | `string` | (Required) The firstname of the buyer            |
| email       | `string` | (Required) The email of the buyer                |
| country     | `enum`   | (Required) The country where the buyer lives     |
| companyName | `string` | (Optional) The name of the company of the buyer  |

## Add one information at a time

```Javascript
import { Buyer } from 'paygreen-node';

const newBuyer = new Buyer();
    newBuyer.firstName = 'Jean';

```

## Or all at once

```Javascript
import { Buyer, Country } from 'paygreen-node';

const newBuyer = new Buyer(
    'duponje1',
    'Dupont',
    'Jean',
    'dupont.jean1@example.com',
    Country.FR,
    'MonEntreprise',
);

```

## We have built special method to verify the data before sending it to API. [Try it here](tools#verify)
