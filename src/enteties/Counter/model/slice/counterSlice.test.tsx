import { CounterShema } from '../types/counterShema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    const state: CounterShema = {
        value: 10,
    };

    test('should return decrement value', () => {
        expect(counterReducer(state as CounterShema, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('should return increment value', () => {
        expect(counterReducer(state as CounterShema, counterActions.increment)).toEqual({ value: 11 });
    });

    test('should work with empty value', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
