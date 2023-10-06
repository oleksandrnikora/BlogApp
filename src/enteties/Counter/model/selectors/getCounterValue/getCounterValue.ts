import { createSelector } from 'reselect';
import { getCounter } from '../getCounter/getCounter';
import { CounterShema } from '../../types/counterShema';

export const getCounterValue = createSelector(
    getCounter,
    (counter:CounterShema) => counter.value,
);
