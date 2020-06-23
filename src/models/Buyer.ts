import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { IsEmail, MinLength, IsISO31661Alpha2 } from 'class-validator';
import { Country } from '../enums';

/**
 * Buyer Model Class with methods to create and manage buyer informations
 */

@Serializable()
export class Buyer {
    @JsonProperty('id')
    @MinLength(1)
    public id?: string | null;

    @JsonProperty('lastName')
    @MinLength(1)
    public lastName?: string | null;

    @JsonProperty('firstName')
    @MinLength(1)
    public firstName?: string | null;

    @JsonProperty('email')
    @IsEmail()
    public email?: string | null;

    @JsonProperty('country')
    @IsISO31661Alpha2()
    public country?: Country | null;

    @JsonProperty('companyName')
    @MinLength(1)
    public companyName?: string | null;

    constructor(
        id?: string | null,
        lastName?: string | null,
        firstName?: string | null,
        email?: string | null,
        country?: Country | null,
        companyName?: string | null,
    ) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.country = country;
        this.companyName = companyName;
    }
}
