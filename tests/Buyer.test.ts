require('dotenv').config('/.env');
import { Buyer, Tools } from '../src/models';
import { Country } from '../src/enums';
import { deserialize } from 'typescript-json-serializer';

test('Add firstname of a user with Buyer Model', () => {
    const buyer = new Buyer();
    buyer.firstName = 'New FirstName';
    expect(buyer.firstName).toEqual('New FirstName');
});

test('Add complete profile of a buyer with Buyer Model and returns the validation string', () => {
    const buyer = new Buyer(
        'bid4643',
        'Lefebvre',
        'Pierrick',
        'pierrick.lefebvre@paygreen.fr',
        Country.FR,
        'PayGreen',
    );
    expect(buyer).toMatchObject({
        id: 'bid4643',
        lastName: 'Lefebvre',
        firstName: 'Pierrick',
        email: 'pierrick.lefebvre@paygreen.fr',
        country: 'FR',
        companyName: 'PayGreen',
    });

    return Tools.verify(buyer).then((res) => {
        expect(res).toBe('Validation succeed');
    });
});

test('Deserialize received data to fit Buyer Model', () => {
    const buyer = new Buyer(
        'bid4643',
        'Lefebvre',
        'Pierrick',
        'pierrick.lefebvre@paygreen.fr',
        Country.FR,
        'PayGreen',
    );
    const finalData = deserialize(buyer, Buyer);
    expect(finalData).toMatchObject({
        id: 'bid4643',
        lastName: 'Lefebvre',
        firstName: 'Pierrick',
        email: 'pierrick.lefebvre@paygreen.fr',
        country: 'FR',
        companyName: 'PayGreen',
    });
});

test('Verify method returns error with the name of the wrong property id', () => {
    const buyer = new Buyer(
        '',
        'Lefebvre',
        'Pierrick',
        'pierrick.lefebvrepaygreen.fr',
        Country.FR,
        'PayGreen',
    );
    return Tools.verify(buyer).then((data: any) => {
        expect(data).toBeDefined();
        expect(data[0].property).toContain('id');
    });
});
