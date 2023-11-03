import { StateShema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            counter: {
                value: 10,
            },
        };

        expect(getCounterValue(state as StateShema)).toEqual(10);
    });
});
