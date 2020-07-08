---
id: tools
title: Helpful methods for handling API Requests & Responses
---

We have created a bunch of methods to help you optimizing the data created to be sent to API as well as handling data received from API response.

## Before sending data to API

### verify()

| Param | Type     | Description                                             |
| ----- | -------- | ------------------------------------------------------- |
| data  | `object` | (Required) Object created with one of the model classes |

- Easily verify the data built with model classes (`Buyer`,`OrderDetails`, `Transaction`) before sending it to API. This method verifies if there is no field left empty when all of them are required and check specific value validity like email for `Buyer`.

```Javascript
    import { Tools } from 'paygreen-node';

    return Tools.verify(data)
        .then((res) => {
        console.log(res)
    });
```

- If all values are ok, you will received a simple string :

```Javascript
    'Validation succeed !'
```

- In case of error, the method will return an array containing the name of the field concerned and the error detailed. Here, we have built a new Buyer but left the field 'lastName' empty.

```Javascript
    import { Buyer, Country, Tools } from 'paygreen-node';

    Buyer {
        id: 'duponje1',
        lastName: 'Dupont',
        firstName: 'Jean',
        email: 'dupont.jean1@example.com',
        country: Country.FR,
        companyName: 'MonEntreprise',
    }

    return Tools.verify(Buyer).then((res) => {
        console.log(res)
    });

    res = [
        ValidationError {
            value: '',
            property: 'lastName',
            children: [],
            constraints: {
            minLength: 'lastName must be longer than or equal to 1 characters'
            }
        }
    ]

```

## Handling API Responses

Some API responses can be huge or complex with specific errors, for more efficiency we have built methods to browse the responses and access to specific information quickly.

### isSuccessful()

| Param    | Type          | Description                                         |
| -------- | ------------- | --------------------------------------------------- |
| response | `ApiResponse` | (Required) Response formatted with format's methods |

- Verify if HTTP response format = 2XX.

```Javascript
    import { ApiResponse } from 'paygreen-node';

    return ApiResponse.isSuccessful(response) // output true or false
```

### isInvalid()

| Param    | Type          | Description                                         |
| -------- | ------------- | --------------------------------------------------- |
| response | `ApiResponse` | (Required) Response formatted with format's methods |

- Verify if HTTP response format = 4XX.

```Javascript
    import { ApiResponse } from 'paygreen-node';

    return ApiResponse.isInvalid(response) // output true or false
```

### causedAnError()

| Param    | Type          | Description                                         |
| -------- | ------------- | --------------------------------------------------- |
| response | `ApiResponse` | (Required) Response formatted with format's methods |

- Verify if HTTP response format = 5XX.

```Javascript
    import { ApiResponse } from 'paygreen-node';

    return ApiResponse.causedAnError(response) // output true or false
```

### getStatus()

| Param    | Type          | Description                                         |
| -------- | ------------- | --------------------------------------------------- |
| response | `ApiResponse` | (Required) Response formatted with format's methods |

- Get status of the HTTP response.

```Javascript
    import { ApiResponse } from 'paygreen-node';

    return ApiResponse.getStatus(response) // output number
```

### getErrorMessage()

| Param    | Type          | Description                                         |
| -------- | ------------- | --------------------------------------------------- |
| response | `ApiResponse` | (Required) Response formatted with format's methods |

- Get error message details.

```Javascript
    import { ApiResponse } from 'paygreen-node';

    return ApiResponse.getErrorMessage(response) // output string
```
