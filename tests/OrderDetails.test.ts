require('dotenv').config('/.env');
import { OrderDetails, Tools } from '../src/models';

const orderDetails = new OrderDetails(40, 3, 0, new Date().toISOString(), 0);

test('it returns the validation string', () => {
    return Tools.verify(orderDetails).then((res) => {
        expect(res).toBe('Validation succeed');
    });
});
