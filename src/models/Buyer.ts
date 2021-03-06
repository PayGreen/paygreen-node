import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { IsEmail, IsISO31661Alpha2, MinLength } from 'class-validator';
import { Country } from '../enums';

/**
 * Buyer Model Class with constructor to create and manage buyer informations
 * @property {string?} id - The unique identifier of buyer
 * @property {string?} lastName - The lastname of buyer
 * @property {string?} firstName - The firstname of buyer
 * @property {string?} email - The email of buyer
 * @property {Country?} country - The code of buyer's country in ISO3166 format
 * @property {string?} companyName - The company name if buyer is a company
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
    public country?: string | null;

    @JsonProperty('companyName')
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
        if (country != null) {
            this.country = Country[country];
        }
        this.companyName = companyName;
    }
}
