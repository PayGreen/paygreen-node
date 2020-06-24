require('dotenv').config('/.env');
import { Buyer, Tools } from '../src/models';
import { Country } from '../src/enums';

const buyer = new Buyer(
    `bid${Math.floor(Math.random() * 10000)}`,
    'Lefebvre',
    'Pierrick',
    'pierrick.lefebvre@paygreen.fr',
    Country.FR,
    'PayGreen',
);

test('it returns the validation string', () => {
    return Tools.verify(buyer).then((res) => {
        expect(res).toBe('Validation succeed');
    });
});
