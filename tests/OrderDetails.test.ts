require('dotenv').config('/.env');
import { OrderDetails, Tools } from '../src/models';
import { deserialize } from 'typescript-json-serializer';

const date = new Date().toISOString();

test('Add cycle of a order details with OrderDetails Model', () => {
    const orderDetails = new OrderDetails();
    orderDetails.cycle = 10;
    expect(orderDetails.cycle).toEqual(10);
});

test('Add complete details of an order with OrderDetails Model and returns the validation string', () => {
    const orderDetails = new OrderDetails(40, 3, 0, date, 0);
    expect(orderDetails).toMatchObject({
        cycle: 40,
        count: 3,
        day: 0,
        startAt: date,
        firstAmount: 0,
    });

    return Tools.verify(orderDetails).then((res) => {
        expect(res).toBe('Validation succeed');
    });
});

test('deserialize received data to fit OrderDetails Model', () => {
    const orderDetails = new OrderDetails(40, 3, 0, date, 0);
    const finalData = deserialize(orderDetails, OrderDetails);
    expect(finalData).toMatchObject({
        cycle: 40,
        count: 3,
        day: 0,
        startAt: date,
        firstAmount: 0,
    });
});

test('Verify method returns error with the name of the wrong property cycle', () => {
    const orderDetails = new OrderDetails(null, 3, 0, date, 0);
    return Tools.verify(orderDetails).then((data: any) => {
        expect(data).toBeDefined();
        expect(data[0].property).toContain('cycle');
    });
});
